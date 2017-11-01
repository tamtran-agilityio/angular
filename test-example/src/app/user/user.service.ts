import { Injectable } from '@angular/core';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { USERS } from './mock-data';
import { User } from './user';
@Injectable()
export class UserService {

  constructor() { }

  getUsers() {
    return Observable.of(USERS);
  }
}
