import { CommonModule } from '@angular/common';
import { NgModule, Provider } from '@angular/core';
import { HttpModule, } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MainFooterComponent } from './main-footer/main-footer.component';
import { NavComponent } from './nav/nav.component';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal/modal.service';
import { ControlMessagesComponent } from './control-messages/control-messages.component';
import { ClickOutsideDirective } from './directive/click-out-side.directive';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { DropdownModule } from './dropdown/dropdown.module';
import { RatingModule } from './rating/rating.module';

export const COMMON_MODULES: any[] = [
  FormsModule,
  ReactiveFormsModule,
  HttpModule,
  CommonModule,
  RouterModule,
  DropdownModule,
  RatingModule
];

export const SHARED_COMPONENT: any[] = [
  MainFooterComponent,
  NavComponent,
  ModalComponent,
  ControlMessagesComponent,
  ErrorMessageComponent,
  ClickOutsideDirective
];

export const CORE_PROVIDERS: any[] = [
  ModalService
];

@NgModule({
  imports: [
    ...COMMON_MODULES
  ],
  declarations: [
    ...SHARED_COMPONENT,
  ],
  providers: [
    ...CORE_PROVIDERS
  ],
  exports: [
    ...COMMON_MODULES,
    ...SHARED_COMPONENT
  ]
})
export class SharedModule { }
