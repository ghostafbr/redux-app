import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";

/*
* loadComponent and loadChildren are for lazy loading
*/

export const AppRouting: Routes = [
  {
    path: '',
    component: AppComponent,
  }
/*  {
    // path: '',
    path: ':tenant',
    component: PymesLayoutComponent,
    children: [
      {
        path: '',
        // canLoad: [ AuthGuard ], // This Guard Redirect to LogIn View if users is unauthorised
        // loadChildren: () => import('./pages/sales/sales.routing').then(mod => mod.SALES_ROUTES),
        loadChildren: () => import('../app/layouts/pymes-layout/pymes-layout.routing').then(mod => mod.PYMES_LAYOUT_ROUTES),
      },
    ]
  },*/
/*  {
    // path: '',
    path: ':tenant',
    component: PymesLayoutComponent,
    children: [
      {
        path: '',
        canLoad: [ TenantGuard ], // Only verify if tenant exists
        loadChildren: () => import('../app/layouts/pymes-layout/pymes-layout.routing').then(mod => mod.PYMES_LAYOUT_ROUTES),
      },
    ]
  },*/
];
