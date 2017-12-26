import {
  Injectable
} from '@angular/core';

import * as _ from 'lodash';

import {
  User
} from '@app/user/models/user';

@Injectable()
export class UserHelperService {

  constructor() { }

  /**
   * Get id user by time
   */
  getIdUser() {
    return _.now();
  }

  /**
   * Handle update user on users
   */
  updateUsers(user: User, users: User[]) {
    const index = _.findIndex(users, {id: user.id});
    return users.splice(index, 1, user);
  }

  /**
   * Handle delete user on users
   */
  deleteUsers(user: User, users: User[]) {
    _.remove(users, (item) => {
      return item.id === user.id;
    });
    return users;
  }

}
