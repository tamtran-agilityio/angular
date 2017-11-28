import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from '@app/categories/component/category/category.component';
import { PrimarylayoutComponent } from '@app/shared/component/primarylayout/primarylayout.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: PrimarylayoutComponent,
    children: [
      {
        path: 'development',
        component: CategoryComponent
      },
      {
        path: ':name',
        component: CategoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [ RouterModule]
})

export class CategoriesRoutingModule {}
