import { Injectable } from '@angular/core';
import { HttpWrapperService } from '@app/core/services/http-wrapper.service';
import { Observable } from 'rxjs/Observable';
import { Post } from '@app/post/models/post.model';
import { AppConfigService } from '@app/core/services/app-config.service';

@Injectable()
export class PostService {

  constructor(
    private appConfig: AppConfigService,
    private httpWrapperService: HttpWrapperService
  ) { }

  getPosts(): Observable<Post[]> {
    let url = this.appConfig.URL_TABLES.POST;
    return this.httpWrapperService.get(url);
  }
}
