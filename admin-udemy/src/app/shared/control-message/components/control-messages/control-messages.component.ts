import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  FormGroup,
  FormControl
} from '@angular/forms';
import {
  AppConfigService
} from '@app/core/services/app-config.service';

@Component({
  selector: 'control-messages',
  templateUrl: './control-messages.component.html',
  styleUrls: ['./control-messages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlMessagesComponent implements OnInit {
  errorMessage: string;
  @Input() control: FormControl;
  constructor(
    private appConfig: AppConfigService
  ) { }

  ngOnInit() {
  }

  get errorMessages() {
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return this.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }

  getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config = this.appConfig.VALIDATION_MESSAGES;

    return config[validatorName];
  }

}
