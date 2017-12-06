import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable()
export class AppConfigService {

  constructor() { }

  // Api root
  API = {
    API_ROOT: environment.API_ROOT
  };

  // Key code
  KEY_CODE = {
    KEYUP: 27
  };

  // Table query
  TABLES = {
    COURSES: 'courses',
    TEACHER: 'teacher',
    CATEGORIES: 'categories'
  };

  // Vilidation available
  VALIDATION = {
    MESSAGES: {
      'required': 'Required',
      'invalidCreditCard': 'Is invalid credit card number',
      'invalidEmailAddress': 'Invalid email address',
      'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
      'minlength': `Minimum length <%= validation.minlength %>`,
      'maxlength': `Minimum length <%= validation.maxlength %>`,
      'invalidRating': 'Is invalid number or max 5',
      'invalidPrice': 'Is invalid number',
      'required.length': 'Minimum length <%= validation.minlength %>'
    },
    AUTHENTICATION: {
      'AUTHENTICATION_FAIL': 'Please check your email and password.',
      'REGISTER_FAIL': 'Ooh! Email exists. Please try again',
      'AUTHENTICATION_PASSWORD_FAIL': 'Invalid password',
    },
    VALUE: {
      'EMAIL_PATTERN': /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
      'EMAIL_MINLENGTH': 6,
      'EMAIL_MAXLENGTH': 40,

      'PASSWORD_PATTERN': /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{4,100}$/,
      'PASSWORD_MINLENGTH': 4,
      'PASSWORD_MAXLENGTH': 50,
      'RATING_PATTERN': /^-?\d+\.?\d*$/
    }
  };
}
