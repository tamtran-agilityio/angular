import { Action, ActionReducer, createSelector } from '@ngrx/store';
import { TodoAction, ActionTypes } from '@app/todo/store/todo.actions';
import { Todo } from '@app/todo/models/todo';
import * as Immutable from 'seamless-immutable';

export interface State {
  ids: string[];
  entities: { [id: string]: Todo };
  selectedTodoId: string;
}

export const initialTodo: State = Immutable({
  ids: [],
  entities: {},
  selectedTodoId: null
});

export function todoReducer(
  state: any = initialTodo, action: TodoAction
) {

  switch (action.type) {

  case ActionTypes.LOAD_COMPLETED:
    const ids = Object.keys(action.payload);
    return Immutable.merge(initialTodo, {
      ids,
      entities: action.payload
    });

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

export const getEntites = (state: State) => state.entities;
export const getIds = (state: State) => state.ids;
export const getSelectedId = (state: State) => state.selectedTodoId;

export const getSelected = createSelector(
  getEntites,
  getSelectedId,
  (entities, id) => entities[id]
);

export const getEntitesArray = (state: State) => state.ids.map(id => state.entities[id]);
