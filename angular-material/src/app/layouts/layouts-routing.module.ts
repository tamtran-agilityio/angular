import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { LayoutComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
