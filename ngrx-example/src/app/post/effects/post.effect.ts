import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as postActionType from '@app/post/actions/post.action.type';
import * as postAction from '@app/post/actions/post.action';
import { PostService } from '@app/post/services/post.service';

@Injectable()
export class PostEffects {
  constructor(
    private action: Actions,
    private postService: PostService
  ) {}

  @Effect() getPost = this.action
    .ofType(postActionType.PostActionType.LOAD)
    .switchMap(() => this.postService.getPosts())
    .map((posts) => postAction.PostAction.prototype.getPostsSuccess(posts))
    .catch((error) => Observable.of(postAction.PostAction.prototype.getPostsFail(error)));
}
