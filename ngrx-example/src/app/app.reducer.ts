import {
  combineReducers,
  ActionReducer
} from '@ngrx/store';

import * as rootPostReducer from '@app/post/reducers/root-post.reducer';

export interface AppState {
  // postState: rootPostReducer.postState;
}

export const reducers = {
  rootPostReducer
};

const combinedReducer: ActionReducer<AppState> = combineReducers(reducers);

export function rootReducer(state: any, action: any) {
  return combinedReducer(state, action);
}
