import {
  Injectable
} from '@angular/core';
import {
  Headers
} from '@angular/http';

import {
  Observable
} from 'rxjs/Observable';

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
  getUsers(): Observable<User[]> {
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
    const path = this.userTable + id;
    return this.httpWrapper.delete(path)
                           .subscribe();
  }

  /**
   * Handle create new user
   * @param user info user need to add
   */
  createUser(user: User) {
    this.httpWrapper.post(this.userTable, JSON.stringify(user))
                    .subscribe(res => {});
  }

  /**
   * Handle create update user
   * @param user info user need to update
   */
  updateUser(user: User) {
    const path = this.userTable + user.id;
    this.httpWrapper.patchs(path, JSON.stringify(user))
                    .subscribe(res => {});
  }

}
