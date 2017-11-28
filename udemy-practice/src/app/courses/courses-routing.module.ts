import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent } from './component/courses-list/courses-list.component';
import { CoursesDetailComponent } from './component/courses-detail/courses-detail.component';
import { PrimarylayoutComponent } from '@app/shared/component/primarylayout/primarylayout.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: PrimarylayoutComponent,
    children: [
      {
        path: '',
        component: CoursesDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [ RouterModule ]
})

export class CoursesRouting {}
