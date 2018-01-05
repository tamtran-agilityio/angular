import { Action } from '@ngrx/store';

import * as State from '@app/post/states/post.state';
import * as initialPostState from '@app/post/states/intitial-post.state';
import * as postActionType from '@app/post/actions/post.action.type';
import * as postState from '@app/post/actions/post.action';

export function postReducer(
  state: any = initialPostState,
  action: Action
): State.PostState {
  console.log('action.type', action.type);
  switch (action.type) {
    case postActionType.PostActionType.LOAD_SUCCESS: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
