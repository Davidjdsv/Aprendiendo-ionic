import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { CrudUsuarios } from '../services/crudUsuarios/crud-usuarios-service';
import { catchError, map, of } from 'rxjs';

/**
 * Guard: autorizarUsuarioGuard
 *
 * Objetivo:
 * - Autorizar acceso a una ruta verificando credenciales `nombre_usuario` y `clave`.
 * - Consulta el servicio `CrudUsuarios` para validar contra el backend.
 *
 * Flujo:
 * 1) Si ya hay sesión (`isLoggedIn`), permite el acceso.
 * 2) Si no hay sesión, intenta leer credenciales desde los query params
 *    (ej.: /ruta-protegida?nombre_usuario=juan&clave=1234).
 * 3) Valida credenciales llamando a `loginUser` del servicio.
 * 4) Si fallan, redirige a `/login-v2` con información del error.
 *
 * Nota:
 * - En producción, evita pasar credenciales por URL. En su lugar, envíalas desde un formulario
 *   y guarda un token/sesión. Este guard permite ambas estrategias (consulta por sesión y por URL).
 */
export const autorizarUsuarioGuard: CanActivateFn = (route, state) => {
  const crud = inject(CrudUsuarios);
  const router = inject(Router);

  // 1) Si ya está autenticado, permite el acceso
  if (crud.isLoggedIn) {
    return true;
  }

  // 2) Intentar obtener credenciales desde query params
  const nombre = route.queryParamMap.get('nombre_usuario');
  const clave = route.queryParamMap.get('clave');

  // Si faltan credenciales, redirigir al login
  if (!nombre || !clave) {
    const tree: UrlTree = router.createUrlTree(['/login-v2'], {
      queryParams: { redirect: state.url }
    });
    return tree;
  }

  // 3) Validar credenciales contra el servicio
  return crud.loginUser(nombre, clave).pipe(
    map((ok) => {
      // Si las credenciales son válidas, permite el acceso
      if (ok) return true;

      // Si no son válidas, redirigir mostrando error
      return router.createUrlTree(['/login-v2'], {
        queryParams: { error: 'credenciales', redirect: state.url }
      });
    }),
    // 4) En caso de error del servicio, redirigir al login con causa
    catchError(() =>
      of(
        router.createUrlTree(['/login-v2'], {
          queryParams: { error: 'servicio', redirect: state.url }
        })
      )
    )
  );
};
