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
  ) {
    debugger;
   }

  getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config = this.appConfig.VALIDATION_MESSAGES;

    return config[validatorName];
  }

  emailValidator(control) {
    if (control.value.match('')) {
      return null;
    } else {
      return { 'invalidEmailAddress': true };
    }
  }

  passwordValidator(control: FormControl) {
    if (control.value.match('')) {
      return null;
    } else {
      return { 'invalidPassword': true };
    }
  }

  confirmPasswordValidator(control: AbstractControl) {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirmPassword').value;
    if (password === confirmPassword) {
      return null;
    } else {
      return { 'invalidConfirmPassword': true };
    }
  }
}
