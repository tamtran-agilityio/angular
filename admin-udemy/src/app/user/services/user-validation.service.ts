import {
  Injectable,
  Inject,
  forwardRef
} from '@angular/core';
import {
  FormControl,
  AbstractControl,
  Validators
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
    let emailPattern = this.appConfig.PATTERN_MATCHINGS.EMAIL;
    if (control.value) {
      return control.value.match(emailPattern) ? null : { 'invalidEmailAddress': true };
    }
  }

  passwordValidator(control: FormControl) {
    let patternPassword = this.appConfig.PATTERN_MATCHINGS.PASSWORD;
    if (control.value) {
      return control.value.match(patternPassword) ? null : { 'invalidPassword': true };
    }
  }
}
