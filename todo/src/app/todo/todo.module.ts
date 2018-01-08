import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './components/todos/todos.component';
import { TodoRouterModule } from '@app/todo/todo-routing.module';
import { TodoService } from '@app/todo/services/todo.service';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from '@app/todo/store/todo.effects';

export const COMMON_MODULES: any[] = [
  CommonModule,
  TodoRouterModule,
  // EffectsModule.forFeature([TodoEffects]),
];

export const TODO_PROVIDERS: any[] = [
  TodoService,
  TodoEffects
];

@NgModule({
  imports: [
    ...COMMON_MODULES
  ],
  providers: [
    ...TODO_PROVIDERS
  ],
  declarations: [TodosComponent]
})
export class TodoModule { }
