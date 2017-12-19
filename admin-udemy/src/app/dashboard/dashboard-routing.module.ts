import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import {
  DashboardComponent
} from '@app/dashboard/components/dashboard/dashboard.component';
import {
  PrimaryLayoutComponent
} from '@app/shared/layout/components/primary-layout/primary-layout.component';
import {
  ListUserComponent
} from '@app/user/components/list-user/list-user.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: PrimaryLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'users',
        component: ListUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

export class DashBoardRoutingModule { }