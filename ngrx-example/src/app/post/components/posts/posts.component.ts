import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  Store,
  State
} from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as rootPost from '@app/post/reducers/root-post.reducer';
import * as postAction from '@app/post/actions/post.action';
import { Post } from '@app/post/models/post';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsComponent implements OnInit {
  public posts: Observable<Post[]>;
  constructor(
    private store: Store<rootPost.postState>,
    private actions: postAction.PostAction
  ) {
    store.select('postState').subscribe(res => {
      if (res) {
        console.log('postState', res);
      }
      console.log('postState', res);
    });

  }

  ngOnInit() {
    this.store.dispatch(this.actions.getPosts());
  }

}
