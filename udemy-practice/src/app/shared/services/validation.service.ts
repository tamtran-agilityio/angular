import { Injectable } from '@angular/core';

import * as _ from 'lodash';

import { AppConfigService } from '@app/core/services/app-config.service';

@Injectable()
export class ValidationService {

  constructor(
    private appConfig: AppConfigService
  ) { }

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

}
