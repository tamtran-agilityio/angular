import {
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
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
  styleUrls: ['./control-messages.component.scss']
})
export class ControlMessagesComponent implements OnInit {
  @Input() control: FormControl;
  constructor(
    private appConfig: AppConfigService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  get errorMessage() {
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
