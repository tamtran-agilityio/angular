import { Injectable } from '@angular/core';
import { TodoService } from '@app/todo/services/todo.service';
import { Actions, Effect } from '@ngrx/effects';
import * as todoActions from '@app/todo/store/todo.actions';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Todo } from '@app/todo/models/todo';

@Injectable()
export class TodoEffects {
  constructor(
    private todoService: TodoService,
    private actions$: Actions
  ) {}

  @Effect()
  loadAction$: Observable<Action> = this.actions$
    .ofType(todoActions.ActionTypes.LOAD)
    .switchMap(() => this.todoService.getTodos())
    .map((res: any) => new todoActions.LoadCompletedAction({todos: res}))
    .catch(() => Observable.of({ type: todoActions.ActionTypes.LOAD_ERROR }));
}
