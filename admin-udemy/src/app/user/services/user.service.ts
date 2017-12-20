import {
  Injectable
} from '@angular/core';
import {
  Headers
} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import {
  User
} from '@app/user/models/user';
import {
  HttpWrapperService
} from '@app/core/services/http-wrapper.service';
import {
  AppConfigService
} from '@app/core/services/app-config.service';

@Injectable()
export class UserService {
  private userTable = '';
  constructor(
    private httpWrapper: HttpWrapperService,
    private appConfig: AppConfigService
  ) {
    this.userTable = this.appConfig.API_URLS.USERS;
  }

  /**
   * Get list user
   */
  getUser(): Observable<User[]> {
    return Observable.create(obs => {
      return this.httpWrapper.get(this.userTable).subscribe(res => {
        obs.next(res);
      });
    });
  }

  /**
   * Handle delete method
   * @param id the number need to delete
   */
  deteleUserById(id: number) {
    return this.httpWrapper.delete(this.userTable, id)
                           .subscribe();
  }

  /**
   * Handle create new user
   * @param user info user need to add
   */
  createUser(user: User) {
    const table = this.appConfig.API_URLS.USERS;
    this.httpWrapper.post(this.userTable, JSON.stringify(user))
                    .subscribe(res => {});
  }

}
