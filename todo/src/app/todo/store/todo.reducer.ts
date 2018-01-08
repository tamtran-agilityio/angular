import { Action, ActionReducer, createSelector } from '@ngrx/store';
import { TodoAction, ActionTypes } from '@app/todo/store/todo.actions';
import { Todo } from '@app/todo/models/todo';

export interface TodoState {
  todos?: Todo[];
}

export const initialTodo: TodoState = {
  todos: []
};

export function todoReducer(
  state: any = initialTodo, action: TodoAction
) {

  switch (action.type) {

  case ActionTypes.LOAD_COMPLETED:
    return [...state, ...action.payload.todos];

  case ActionTypes.CREATE_COMPLETED:
    return [...state, action.payload.todo];

  case ActionTypes.UPDATE_COMPLETED:
    return state.map((todo: Todo) => {
      return todo.id === action.payload.todo.id ? action.payload.todo : todo;
  });

  case ActionTypes.REMOVE_COMPLETED:
    return state.filter((todo: Todo) => {
      return todo.id !== action.payload.todo.id;
    });

  default:
    return state;
  }
}
