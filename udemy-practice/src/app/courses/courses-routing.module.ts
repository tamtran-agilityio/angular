import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent } from './component/courses-list/courses-list.component';
import { CoursesDetailComponent } from './component/courses-detail/courses-detail.component';
import { PrimarylayoutComponent } from '@app/shared/component/primarylayout/primarylayout.component';
import { CoursesSearchComponent } from '@app/courses/component/courses-search/courses-search.component';
import { CategoryComponent } from '@app/categories/component/category/category.component';
import { TopicComponent } from '@app/categories/component/topic/topic.component';
import { AddCoursesComponent } from '@app/courses/component/add-courses/add-courses.component';
import { ManagerCoursesComponent } from '@app/courses/component/manager-courses/manager-courses.component';
import { EditCoursesComponent } from '@app/courses/component/edit-courses/edit-courses.component';
export const ROUTES: Routes = [
  {
    path: '',
    component: PrimarylayoutComponent,
    children: [
      {
        path: '',
        component: CoursesDetailComponent
      },
      {
        path: 'add',
        component: AddCoursesComponent
      },
      {
        path: 'edit',
        children: [
          {
            path: ':name',
            component: EditCoursesComponent
          }
        ]
      },
      {
        path: 'search',
        component: CoursesSearchComponent
      },
      {
        path: 'manager',
        component: ManagerCoursesComponent
      },
      {
        path: 'development',
        children: [
          {
            path: '',
            component: CategoryComponent
          },
          {
            path: ':name',
            component: TopicComponent
          }
        ]
      },
      {
        path: 'business',
        children: [
          {
            path: '',
            component: CategoryComponent
          },
          {
            path: ':name',
            component: TopicComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [ RouterModule ]
})

export class CoursesRouting {}
