import * as fromTodo from '@app/todo/store/todo.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export interface TodosState {
  todos: fromTodo.State;
}


export interface State {
  'todos': TodosState;
}

export const reducers = {
  todos: fromTodo.todoReducer
};


export const getTodosRootState = createFeatureSelector<TodosState>('todos');
export const getTodosState = createSelector(getTodosRootState, (todosState: TodosState) => todosState.todos);

export const getEntites = createSelector(getTodosState, fromTodo.getEntites);
export const getIds = createSelector(getTodosState, fromTodo.getIds);
export const getSelectedId = createSelector(getTodosState, fromTodo.getSelectedId);
export const getSelected = createSelector(getTodosState, fromTodo.getSelected);
export const getEntitiesArray = createSelector(getTodosState, fromTodo.getEntitesArray);
