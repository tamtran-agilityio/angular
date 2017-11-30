import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ROUTES as courseRouting } from '@app/courses/courses-routing.module';
import { PrimarylayoutComponent } from '@app/shared/component/primarylayout/primarylayout.component';
import { CoursesDetailComponent } from '@app/courses/component/courses-detail/courses-detail.component';
import { ROUTES as teacherRouting } from '@app/teacher/teacher-routing.module';
import { AboutComponent } from '@app/about/about.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: PrimarylayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'teaching',
        children: [
          ...teacherRouting
        ]
      },
      {
        path: ':name',
        component: CoursesDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})

export class HomeRouting {}
