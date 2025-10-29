# Documentación del Proyecto: IonicProyect

Este documento resume el stack tecnológico, la arquitectura, el enrutamiento y los módulos principales del proyecto.

## Stack Tecnológico
- Angular: `^20.0.0`
- Ionic Angular: `^8.7.3`
- Capacitor: CLI `7.4.3`, Core `7.4.3`
- RxJS: `~7.8.0`
- Zone.js: `^0.15.1`
- Bootstrap: `^5.3.8`
- Ionicons: `^6.1.3`
- TypeScript: `~5.8.0`

## Estructura Principal
- `src/app/app.routes.ts`: Definición de rutas (lazy-load de páginas y componentes standalone).
- `src/app/pages/`: Páginas principales del proyecto (standalone components).
- `src/app/components/`: Componentes reutilizables (standalone components).
- `src/app/services/`: Servicios (lógica de negocio y acceso a datos).
- `src/app/guards/`: Guards para proteger rutas y condicionar acceso.
- `src/environments/`: Configuraciones de entorno.
- `src/assets/`: Recursos estáticos (JSON, íconos, imágenes).

## Rutas Configuradas
Fuente: `src/app/app.routes.ts`

- `/` → redirect a `login-v2`
- `/home` → `HomePage` (canActivate: `authGuard`)
- `/customers` → `CustomersPage`
- `/products` → `ProductsPage`
- `/starwars` → `StarwarsPage`
- `/countries` → `CountriesPage`
- `/city/:id` → `CityPage`
- `/login` → `LoginPage`
- `/calculadora` → `CalculadoraPage`
- `/pokemon` → `PokemonPage` (canMatch: `authCanMatch`)
- `/pokemon-selected/:id` → `PokemonSelectedPage`
- `/infinite-scroll` → `InfinityScrollComponent` (componente standalone)
- `/father-and-son` → `FatherAndSonPage`
- `/test-components` → `TestComponentsPage`
- `/settings` → `SettingsPage`
- `/rick-and-morty` → `RickAndMortyPage` (canActivate: `authGuard`)
- `/login-v2` → `LoginV2Page`
- `/signals` → `SignalsPage`
- `/crud-usuarios` → `CrudUsuariosPage`
- `/dragonball` → `DragonballPage`
- `/login-user` → `LoginUserPage`
- `/grid-test` → `GridTestPage`
- `**` → `NotFoundPage`

## Páginas (src/app/pages)
- calculadora, city, countries, crud-usuarios, customers, dragonball, father-and-son,
  grid-test, home, login-user, login-v2, login, not-found, pokemon-selected,
  pokemon, products, rick-and-morty, settings, signals, starwars, test-components.

Cada página es un componente standalone (ej.: `*.page.ts`) con su template `*.page.html` y estilos `*.page.scss`.

## Componentes Reutilizables (src/app/components)
- `action-sheet`, `child`, `father`, `infinity-scroll`, `shared-menu`, `simple-card`,
  `toggle-dark-mode`, además de modales en `components/modals/` (add-user, edit-user, delete-user).

Ejemplo: `components/child/child.component.ts` es standalone e importa `IonLabel`, `IonInput` y `FormsModule`.

## Servicios (src/app/services)
- `core/auth-service.ts`
- `crudUsuarios/crud-usuarios-service.ts`
- `interceptor/interceptor.ts`
- `pokemon/service-pokemon.ts`
- `rickAndMorty/rick-and-morty.ts`
- `calculadora/calculadora.ts`

## Guards (src/app/guards)
- `authGuard` (canActivate)
- `authCanMatch` (canMatch)

## Entornos y Recursos
- Entornos: `src/environments/environment.ts`, `src/environments/environment.prod.ts`.
- Assets: `src/assets/` contiene datasets como `countries.json` y `star_wars.json`, íconos y archivos de apoyo.

## Comandos Útiles
- `npm start` o `ng serve`: inicia el servidor de desarrollo.
- `npm run build` o `ng build`: compila la aplicación.
- `npm test`: ejecuta pruebas unitarias.
- `npm run lint`: ejecuta el linter.

## Notas de Arquitectura
- El proyecto utiliza componentes standalone de Angular/Ionic, con lazy loading en las rutas para mejorar rendimiento.
- Se emplean guards para proteger rutas sensibles (`authGuard`) y controlar el matching de rutas (`authCanMatch`).
- Capacitor está configurado para capacidades nativas (Status Bar, Haptics, Keyboard, etc.).

---

Si quieres, puedo añadir diagramas de navegación, documentación de cada página/componente (inputs/outputs) o una guía de contribución. Indícame el nivel de detalle deseado y lo amplío.