import { Injectable, Optional, SkipSelf} from '@angular/core';
import { FormControl, ValidatorFn, AbstractControl } from '@angular/forms';

import * as _ from 'lodash';
import { AppConfigService } from '@app/core/service/app-config.service';

@Injectable()
export class ValidationService {

  constructor(private appConfig: AppConfigService) {}

  getValidatorErrorMessage(validatorName: string, validatorValue?: any) {

    let config = this.appConfig.VALIDATION.MESSAGES;
    let template =  _.template(config[validatorName]);
    return _.template(config[validatorName])({
      value: '',
      validation: {
        minlength: validatorValue ? validatorValue.requiredLength : 0,
        maxlength:  validatorValue ? validatorValue.requiredLength : 0,
        required: true
      },
      errors: {

      }
    });
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
    return extension.indexOf(c.value) ? null : { validateExt: false };
 }

  ratingValidator(max: number): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const input = control.value,
            isValid = input > max;
      if (!_.isNil(control.value)) {
        if (isValid || !control.value.match(/^-?\d+\.?\d*$/)) {
          return { 'invalidRating': true };
        } else {
          return null;
        }
      }
    };
  }

  priceValidator(control: FormControl) {
    if (!_.isNil(control.value)) {
      if (!control.value.match(/^-?\d+\.?\d*$/)) {
        return { 'invalidPrice': true };
      } else {
        return null;
      }
    }
  }
}
