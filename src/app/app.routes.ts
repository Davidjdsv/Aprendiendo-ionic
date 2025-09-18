import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'customers',
    loadComponent: () => import('./customers/customers.page').then( m => m.CustomersPage)
  },
  {
    path: 'products',
    loadComponent: () => import('./products/products.page').then( m => m.ProductsPage)
  },
  {
    path: 'starwars',
    loadComponent: () => import('./starwars/starwars.page').then( m => m.StarwarsPage)
  },
  {
    path: 'countries',
    loadComponent: () => import('./countries/countries.page').then( m => m.CountriesPage)
  },
  {
    path: 'city/:id',
    loadComponent: () => import('./city/city.page').then( m => m.CityPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'calculadora',
    loadComponent: () => import('./calculadora/calculadora.page').then( m => m.CalculadoraPage)
  },
  {
    path: 'pokemon',
    loadComponent: () => import('./pokemon/pokemon.page').then( m => m.PokemonPage)
  },
  {
    path: 'pokemon-selected/:id',
    loadComponent: () => import('./pokemon-selected/pokemon-selected.page').then( m => m.PokemonSelectedPage)
  },
  {
    path: 'infinite-scroll',
    loadComponent: () => import('./components/infinity-scroll/infinity-scroll.component').then( m => m.InfinityScrollComponent)
  },
  {
    path: 'father-and-son',
    loadComponent: () => import('./father-and-son/father-and-son.page').then( m => m.FatherAndSonPage)
  },
  {
    path: 'father-and-son',
    loadComponent: () => import('./father-and-son/father-and-son.page').then( m => m.FatherAndSonPage)
  },
  {
    path: 'test-components',
    loadComponent: () => import('./test-components/test-components.page').then( m => m.TestComponentsPage)
  },  {
    path: 'settings',
    loadComponent: () => import('./settings/settings.page').then( m => m.SettingsPage)
  },
  {
    path: 'rick-and-morty',
    loadComponent: () => import('./rick-and-morty/rick-and-morty.page').then( m => m.RickAndMortyPage)
  },

  
];
