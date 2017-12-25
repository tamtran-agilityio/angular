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
import {
  AddUserComponent
} from '@app/user/components/add-user/add-user.component';
import {
  CourseListComponent
} from '@app/course/components/course-list/course-list.component';

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
      },
      {
        path: 'courses',
        component: CourseListComponent
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
