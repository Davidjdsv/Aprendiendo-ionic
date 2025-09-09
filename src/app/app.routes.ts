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
  }
];
