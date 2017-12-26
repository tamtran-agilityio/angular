import {
  Injectable,
  Inject,
  forwardRef
} from '@angular/core';
import {
  FormControl,
  AbstractControl
} from '@angular/forms';

import {
  AppConfigService
} from '@app/core/services/app-config.service';

@Injectable()
export class UserValidationService {

  constructor(
    private appConfig: AppConfigService
  ) { }

  emailValidator(control: FormControl) {
    const patternEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (control.value) {
      if (control.value.match(patternEmail)) {
        return null;
      } else {
        return { 'invalidEmailAddress': true };
      }
    }
  }

  passwordValidator(control: FormControl) {
    const patternPassword = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/;
    if (control.value) {
      if (control.value.match(patternPassword)) {
        return null;
      } else {
        return { 'invalidPassword': true };
      }
    }
  }
}
