import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimarylayoutComponent } from '@app/shared/component/primarylayout/primarylayout.component';
import { MyCoursesComponent } from '@app/my-courses/component/my-courses/my-courses.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: PrimarylayoutComponent,
    children: [
      {
        path: ':name',
        component: MyCoursesComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})

export class MyCoursesRouting {}
