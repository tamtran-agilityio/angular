import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpWrapperService, AppConfigService } from '../../../core';
import { Category } from '../modal/category';

@Injectable()
export class CategoryService {

  constructor(private appConfig: AppConfigService,
              private httpWrapper: HttpWrapperService) {}

  getCategories(): Observable<Category[]> {
    let url = this.appConfig.API + 'categories/';

    return Observable.create( (obs) => {
      this.httpWrapper.get(url, {}).subscribe( (res: Category[]) => {
        obs.next(res);
      })
    });
  }
}
