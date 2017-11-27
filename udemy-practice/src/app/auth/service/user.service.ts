import { Injectable } from '@angular/core';

import { HttpWrapperService, AppConfigService } from '../../core';
import { User } from '../model/use';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private httpWrapper: HttpWrapperService,
              private appConfig: AppConfigService) { }

  getUserBy(email: string, password: string): Observable<User> {
    const url = this.appConfig.API.API_ROOT + `users?email=${email}&password=${password}`;
    return Observable.create( obs => {
      this.httpWrapper.get(url, {}).subscribe((res: User) => {
        obs.next(res);
      });
    });
  }

  getUserByEmail(user: User): Observable<User> {
    const url = this.appConfig.API.API_ROOT + `users?email=${user.email}`;
    return Observable.create( obs => {
      this.httpWrapper.get(url, {}).subscribe((res: User) => {
        obs.next(res);
      });
    });
  }

  addUser(user: User) {
    const url = this.appConfig.API.API_ROOT + `users/`;
    return Observable.create( obs => {
      return this.httpWrapper.posts(url, JSON.stringify(user)).subscribe((res) => {
      });
    });
  }
}
