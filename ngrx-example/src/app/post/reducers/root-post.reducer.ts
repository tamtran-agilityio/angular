import {
  combineReducers,
  ActionReducer
} from '@ngrx/store';

import * as State from '@app/post/states/post.state';
import { postReducer } from '@app/post/reducers/post.reducer';

export const reducers = {
  postReducer
};

export interface postState {
  postState: State.PostState;
}

const combinedReducer: ActionReducer<any> = combineReducers(reducers);

export function rootPostReducer(state: any, action: any) {
  return combinedReducer(state, action);
}
