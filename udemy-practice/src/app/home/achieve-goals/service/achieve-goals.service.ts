import { Injectable } from '@angular/core';
import {
  Subject,
  BehaviorSubject,
  Observable
} from 'rxjs/Rx';

import { HttpWrapperService, AppConfigService } from '../../../core';
import { Collection } from '../modal/collection';

@Injectable()
export class AchieveGoalsService {
  achieve$: Subject<any> = new BehaviorSubject<any>([]);
  constructor(private httpWapper: HttpWrapperService,
              private appConfig: AppConfigService) {
                this.achieve$.share();
              }

  getAchieve(): Observable<Collection[]> {
    let url = this.appConfig.API.API_ROOT + `collection/`;

    return Observable.create( obs => {
      this.httpWapper.get(url, {}).subscribe((res: Collection[]) => {
        obs.next(res);
      });
    });
  }
}
