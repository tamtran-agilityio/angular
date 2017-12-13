import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';

import { LogDecorator } from '@app/core/decorators/log.decorator';
import { ComponentDecorator } from '@app/core/decorators/component.decorator';
import { PostService } from '@app/post/services/post.service';

@LogDecorator('test')
@ComponentDecorator({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HomePageComponent implements OnInit {

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    // console.log('Test service', this.postService);
  }

}
