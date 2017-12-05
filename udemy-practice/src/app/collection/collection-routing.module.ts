import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionComponent } from './component/collection.component';
import { PrimarylayoutComponent } from '@app/shared/component/primarylayout/primarylayout.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: PrimarylayoutComponent,
    children: [
      {
        path: ':name',
        component: CollectionComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [ RouterModule]
})

export class CollectionRoutingModule {}
