import { Injectable } from '@angular/core';
import {
  Subject,
  BehaviorSubject,
  Observable
} from 'rxjs/Rx';

import { HttpWrapperService, AppConfigService } from '../../core';
import { Collection } from '../modal/collection';

@Injectable()
export class CollectionService {
  collection$: Subject<any> = new BehaviorSubject<any>([]);
  constructor(private httpWapper: HttpWrapperService,
              private appConfig: AppConfigService) {
                this.collection$.share();
              }

  getCollection(): Observable<Collection[]> {
    let url = this.appConfig.API.API_ROOT + `collection/`;

    return Observable.create( obs => {
      this.httpWapper.get(url, {}).subscribe((res: Collection[]) => {
        obs.next(res);
      });
    });
  }

  getCollectionByName(name: string): Observable<Collection[]> {
    let url = this.appConfig.API.API_ROOT + `collection?name=${name}`;
      return Observable.create( obs => {
        this.httpWapper.get(url, {}).subscribe((res: Collection[]) => {
          obs.next(res);
        });
      });
  }

  getCourseByUser(id: number) {
    let url = this.appConfig.API.API_ROOT + `users/${id}?_embed=user_courses`;
    return Observable.create( obs => {
      this.httpWapper.get(url, {}).subscribe((res: Collection[]) => {
        obs.next(res);
      });
    });
    //users/1?_embed=user_courses
  }
}
