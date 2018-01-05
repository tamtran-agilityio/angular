import { Injectable } from '@angular/core';
import { PostActionType } from '@app/post/actions/post-action.type';
import { Post } from '@app/post/models/post';
import { Action } from '@ngrx/store/src/models';

@Injectable()
export class PostAction {

  getPosts(): Action {
    return {
      type: PostActionType.LOAD
    };
  }

  getPostsSuccess(posts: Post[]): Action {
    return {
      type: PostActionType.LOAD_SUCCESS,
      payload: posts
    };
  }

  getPostsFail(error: any): Action {
    return {
      type: PostActionType.LOAD_FAIL,
      payload: error
    };
  }

}
