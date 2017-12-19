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
  constructor(
    private httpWrapper: HttpWrapperService,
    private appConfig: AppConfigService
  ) { }

  /**
   * Get list user
   */
  getUser(): Observable<User[]> {
    const table = this.appConfig.API_URLS.USERS;
    return Observable.create(obs => {
      return this.httpWrapper.get(table).subscribe(res => {
        obs.next(res);
      });
    });
  }

}
