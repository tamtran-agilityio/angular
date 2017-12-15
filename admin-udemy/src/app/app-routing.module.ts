import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import {
  AppComponent
} from '@app/app.component';
import {
  ROUTES as dashboardRouting
} from '@app/dashboard/dashboard-routing.module';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    children: [
      ...dashboardRouting
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, { useHash: false })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
