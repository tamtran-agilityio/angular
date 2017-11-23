import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionComponent } from './component/collection.component';
import { cleanSession } from 'selenium-webdriver/safari';

export const ROUTES: Routes = [
  {
    path: '',
    component: CollectionComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [ RouterModule]
})

export class CollectionRoutingModule {}
