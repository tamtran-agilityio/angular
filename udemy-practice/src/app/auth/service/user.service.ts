import { Injectable } from '@angular/core';
import { HttpWrapper, AppConfig } from '../../core';
import { User } from '../model/use';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private httpWrapper: HttpWrapper,
              private appConfig: AppConfig) { }

  getUserBy(email: string, password: string): Observable<User> {
    const url = this.appConfig.API + `users?email=${email}&password=${password}`;
    return Observable.create( obs => {
      this.httpWrapper.get(url, {}).subscribe((res: User) => {
        obs.next(res);
      });
    });
  }
}
