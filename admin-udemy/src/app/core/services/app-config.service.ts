import {
  Injectable
} from '@angular/core';

import {
  environment
} from '@env/environment';

@Injectable()
export class AppConfigService {
  API: any = {
    API_ROOT: environment.API_ROOT
  };

  API_URLS: any = {
    USERS: 'users/',
    COURSES: 'courses/',
    TEACHERS: 'teachers/'
  };

  TABLE_COLUMNS = {
    USER: ['select', 'id', 'fullName', 'email', 'password', 'action']
  };

  PAGINATION_DEFAULT = {
    length: 0,
    size: 10,
    pageOption: [5, 10, 25, 100]
  };

  VALIDATION_MESSAGES = {
    'required': 'Required',
    'invalidCreditCard': 'Is invalid credit card number',
    'invalidEmailAddress': 'Invalid email address',
    'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
    'invalidConfirmPassword': '',
    'minlength': `Minimum length`
  };

  PATTERN_MATCHINGS = {
    // tslint:disable-next-line:max-line-length
    EMAIL: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    PASSWORD: /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/
  };

}
