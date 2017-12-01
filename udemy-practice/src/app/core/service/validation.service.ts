import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

import * as _ from 'lodash';

import { AppConfigService } from './app-config.service';

@Injectable()
export class ValidationService {

  constructor(private appConfig: AppConfigService) {}

  getValidatorErrorMessage(validatorName: string, validatorValue?: any) {

    let config = this.appConfig.VALIDATION.MESSAGES;
    return config[validatorName];
  }

  emailValidator(control: FormControl) {
    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
        return null;
    } else {
        return { 'invalidEmailAddress': true };
    }
  }

  passwordValidator(control: FormControl) {
    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
        return null;
    } else {
        return { 'invalidPassword': true };
    }
  }

  validateExt(c: FormControl) {
    let extension = ['png', 'jpeg', 'gif'];
    debugger;
    return extension.indexOf(c.value) ? null : { validateExt: false };
 }
}
