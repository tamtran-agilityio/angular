import { Action } from '@ngrx/store';

import * as State from '@app/post/states/post.state';
import * as postActionType from '@app/post/actions/post.action.type';
import * as postState from '@app/post/actions/post.action';

export function postReducer(
  state: State.initialPostState,
  action: Action
): State.PostState {
  switch (action.type) {
    case postActionType.PostActionType.LOAD_SUCCESS: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
