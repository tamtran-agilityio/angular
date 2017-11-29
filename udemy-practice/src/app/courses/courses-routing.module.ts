import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent } from './component/courses-list/courses-list.component';
import { CoursesDetailComponent } from './component/courses-detail/courses-detail.component';
import { PrimarylayoutComponent } from '@app/shared/component/primarylayout/primarylayout.component';
import { CoursesSearchComponent } from '@app/courses/component/courses-search/courses-search.component';
import { CategoryComponent } from '@app/categories/component/category/category.component';
import { TopicComponent } from '@app/categories/component/topic/topic.component';
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
        path: 'search',
        component: CoursesSearchComponent
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
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [ RouterModule ]
})

export class CoursesRouting {}
