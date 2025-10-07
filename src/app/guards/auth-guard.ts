import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/core/auth-service';

// * Como en los guards no hay contructor para poder inyectar servicios, se usa la función inject
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService) // - Inyectamos el servicio AuthService
  return authService.getAuthToken()
};
