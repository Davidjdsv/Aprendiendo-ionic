import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'inicio',
    loadComponent: () => import('./inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'products',
    loadComponent: () => import('./products/products.page').then( m => m.ProductsPage)
  },
  {
    path: 'customers',
    loadComponent: () => import('./customers/customers.page').then( m => m.CustomersPage)
  },
  {
    path: 'products',
    loadComponent: () => import('./products/products.page').then( m => m.ProductsPage)
  },

];
