import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  ControlMessagesComponent
} from '@app/shared/control-message/components/control-messages/control-messages.component';

export const COMMON_MODULES: any[] = [
  CommonModule
];

export const CONTROL_MESSAGE_COMPONENTS: any[] = [
  ControlMessagesComponent
];

@NgModule({
  imports: [
    ...COMMON_MODULES
  ],
  declarations: [
    ...CONTROL_MESSAGE_COMPONENTS
  ],
  exports: [
    ...CONTROL_MESSAGE_COMPONENTS
  ]
})
export class ControlMessageModule { }
