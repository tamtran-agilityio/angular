import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  ControlMessagesComponent
} from '@app/shared/control-message/components/control-messages/control-messages.component';

export const COMMON_MODULE: any[] = [
  CommonModule
];

export const CONTROL_MESSAGE_COMPONENT: any[] = [
  ControlMessagesComponent
];

@NgModule({
  imports: [
    ...COMMON_MODULE
  ],
  declarations: [
    ...CONTROL_MESSAGE_COMPONENT
  ],
  exports: [
    ...CONTROL_MESSAGE_COMPONENT
  ]
})
export class ControlMessageModule { }
