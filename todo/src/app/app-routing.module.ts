import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { ROUTES as todoRouting } from '@app/todo/todo-routing.module';
export const ROUTES: Routes = [
  {
    path: '',
    children: [
      ...todoRouting
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { useHash: false})],
  exports: [RouterModule]
})

export class AppRouterModule { }
