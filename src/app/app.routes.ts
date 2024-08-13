import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'modulo1', loadChildren: () => import('./modulo1/modulo1.module').then(m => m.Modulo1RoutingModule) },
  { path: 'modulo2', loadChildren: () => import('./modulo2/modulo2.module').then(m => m.Modulo2RoutingModule) },
  { path: '', redirectTo: '/modulo1/child1', pathMatch: 'full' },
  { path: '**', redirectTo: '/modulo1/child1' },
];
