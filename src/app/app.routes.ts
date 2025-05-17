import { provideRouter, Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'login', loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent) },
    { path: 'cattle', loadComponent: () => import('./cattle/cattle-list/cattle-list.component').then(m => m.CattleListComponent) },
    { path: 'add-cattle', loadComponent: () => import('./cattle/cattle-form/cattle-form.component').then(m => m.CattleFormComponent) },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];

export const APP_ROUTES = provideRouter(routes);
