import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MyCoursesComponent } from '@app/courses/component/my-courses/my-courses.component';
import { ROUTES as courseRouting } from '@app/courses/courses-routing.module';
import { PrimarylayoutComponent } from '@app/shared/component/primarylayout/primarylayout.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: PrimarylayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})

export class HomeRouting {}
