
import { Action } from '@ngrx/store';
import { type } from '@app/util';
import { Todo } from '@app/todo/models/todo';

export const ActionTypes = {
    LOAD: type('[Todo] LOAD Requested'),
    LOAD_COMPLETED: type('[Todo] LOAD Completed'),
    LOAD_ERROR: type('[Todo] LOAD Error'),

    CREATE: type('[Todo] CREATE Requested'),
    CREATE_COMPLETED: type('[Todo] CREATE Completed'),
    CREATE_ERROR: type('[Todo] CREATE Error'),

    UPDATE: type('[Todo] UPDATE Requested'),
    UPDATE_COMPLETED: type('[Todo] UPDATE Completed'),
    UPDATE_ERROR: type('[Todo] UPDATE Error'),

    REMOVE: type('[Todo] REMOVE Requested'),
    REMOVE_COMPLETED: type('[Todo] REMOVE Completed'),
    REMOVE_ERROR: type('[Todo] REMOVE Error')
};

export class TodoPayload {
  constructor(public todo: Todo) { }
}

export class TodoUpdatePayload {
  constructor(public todoId: string, public todo: Todo) { }
}

export class TodoRemovePayload {
  constructor(public todoId: string) { }
}

export class TodosPayload {
  constructor(public todos: Todo[]) { }
}

export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor(public payload: any = null) { }
}

export class LoadCompletedAction implements Action {
  type = ActionTypes.LOAD_COMPLETED;

  constructor(public payload: TodosPayload) { }
}

export class LoadErrorAction implements Action {
  type = ActionTypes.LOAD_ERROR;

  constructor(public payload: string) { }
}

export class CreateAction implements Action {
  type = ActionTypes.CREATE;

  constructor(public payload: TodoPayload) { }
}

export class CreateCompletedAction implements Action {
  type = ActionTypes.CREATE_COMPLETED;

  constructor(public payload: TodoPayload) { }
}

export class CreateErrorAction implements Action {
  type = ActionTypes.CREATE_ERROR;

  constructor(public payload: string) { }
}

export class UpdateAction implements Action {
  type = ActionTypes.UPDATE;

  constructor(public payload: TodoUpdatePayload) { }
}

export class UpdateCompletedAction implements Action {
  type = ActionTypes.UPDATE_COMPLETED;

  constructor(public payload: TodoPayload) { }
}

export class UpdateErrorAction implements Action {
  type = ActionTypes.UPDATE_ERROR;

  constructor(public payload: string) { }
}

export class RemoveAction implements Action {
  type = ActionTypes.REMOVE;

  constructor(public payload: TodoRemovePayload) { }
}

export class RemoveCompletedAction implements Action {
  type = ActionTypes.REMOVE_COMPLETED;

  constructor(public payload: TodoPayload) { }
}

export class RemoveErrorAction implements Action {
  type = ActionTypes.REMOVE_ERROR;

  constructor(public payload: string) { }
}

export type TodoAction
  = LoadAction
  | LoadCompletedAction
  | LoadErrorAction
  | CreateAction
  | CreateCompletedAction
  | CreateErrorAction
  | UpdateAction
  | UpdateCompletedAction
  | UpdateErrorAction
  | RemoveAction
  | RemoveCompletedAction
  | RemoveErrorAction;
