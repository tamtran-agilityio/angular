import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from '@app/todo/components/todos/todos.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: TodosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class TodoRouterModule { }
