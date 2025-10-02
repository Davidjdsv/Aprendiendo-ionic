import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
import { authCanMatch } from './guards/match-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login-v2', // Ahora redirige al login como primera página
    pathMatch: 'full',
  },
  {
    path: 'home',
    canActivate: [authGuard], // Protege la página home
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'customers',
    loadComponent: () =>
      import('./pages/customers/customers.page').then((m) => m.CustomersPage),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./pages/products/products.page').then((m) => m.ProductsPage),
  },
  {
    path: 'starwars',
    loadComponent: () =>
      import('./pages/starwars/starwars.page').then((m) => m.StarwarsPage),
  },
  {
    path: 'countries',
    loadComponent: () =>
      import('./pages/countries/countries.page').then((m) => m.CountriesPage),
  },
  {
    path: 'city/:id',
    loadComponent: () =>
      import('./pages/city/city.page').then((m) => m.CityPage),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'calculadora',
    loadComponent: () =>
      import('./pages/calculadora/calculadora.page').then(
        (m) => m.CalculadoraPage
      ),
  },
  {
    path: 'pokemon',
    canMatch: [authCanMatch], 
    loadComponent: () =>
      import('./pages/pokemon/pokemon.page').then((m) => m.PokemonPage),
  },
  {
    path: 'pokemon-selected/:id',
    loadComponent: () =>
      import('./pages/pokemon-selected/pokemon-selected.page').then(
        (m) => m.PokemonSelectedPage
      ),
  },
  {
    path: 'infinite-scroll',
    loadComponent: () =>
      import('./components/infinity-scroll/infinity-scroll.component').then(
        (m) => m.InfinityScrollComponent
      ),
  },
  {
    path: 'father-and-son',
    loadComponent: () =>
      import('./pages/father-and-son/father-and-son.page').then(
        (m) => m.FatherAndSonPage
      ),
  },
  {
    path: 'test-components',
    loadComponent: () =>
      import('./pages/test-components/test-components.page').then(
        (m) => m.TestComponentsPage
      ),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./pages/settings/settings.page').then((m) => m.SettingsPage),
  },
  {
    path: 'rick-and-morty',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/rick-and-morty/rick-and-morty.page').then(
        (m) => m.RickAndMortyPage
      ),
  },
  {
    path: 'login-v2',
    loadComponent: () =>
      import('./pages/login-v2/login-v2.page').then((m) => m.LoginV2Page),
  },
  {
    path: 'signals',
    loadComponent: () => import('./pages/signals/signals.page').then( m => m.SignalsPage)
  },
  {
    path: 'crud-usuarios',
    loadComponent: () => import('./pages/crud-usuarios/crud-usuarios.page').then( m => m.CrudUsuariosPage)
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.page').then((m) => m.NotFoundPage),
  },

];
