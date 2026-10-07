import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'agregar-tarea',
    loadComponent: () => import('./agregar-tarea/agregar-tarea.page').then( m => m.AgregarTareaPage)
  },
  {
    path: 'agregar-tarea',
    loadComponent: () => import('./agregar-tarea/agregar-tarea.page').then( m => m.AgregarTareaPage)
  },
  {
    path: 'agregar-tarea',
    loadComponent: () => import('./agregar-tarea/agregar-tarea.page').then( m => m.AgregarTareaPage)
  },
  {
    path: 'agregar-tarea',
    loadComponent: () => import('./agregar-tarea/agregar-tarea.page').then( m => m.AgregarTareaPage)
  },
];
