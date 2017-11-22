import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as _ from 'lodash';

import { HttpWrapperService, AppConfigService } from '../../../core';
import { Category } from '../modal/category';

@Injectable()
export class CategoryService {

  constructor(private appConfig: AppConfigService,
              private httpWrapper: HttpWrapperService) {}

  getCategories(): Observable<Category[]> {
    let url = this.appConfig.API.API_ROOT + 'categories/';

    return Observable.create( (obs) => {
      this.httpWrapper.get(url, {}).subscribe( (res: Category[]) => {
        this.getTopicByCategory(0)
          .switchMap((response: any) => {
            let subServices = [];
            _.each(res, (category: Category) => {
              subServices.push(this.getTopicByCategory(category.id));
            });
            return Observable.zip(...subServices, (...resp) => {
              let result: any = [];
              _.each(resp, (value: any, idx) => {
                  result = _.concat(result , _.first(value));
              });
              return result;
            });
          })
          .subscribe(resp => {
            obs.next(resp);
          });
      });
    });
  }

  getTopicByCategory(id: number) {
    let url = this.appConfig.API.API_ROOT + `categories?id=${id}&_embed=topics`;
    return this.httpWrapper.get(url, {})
      .map(res => res);
  }
}
