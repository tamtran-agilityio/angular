import { CommonModule } from '@angular/common';
import { NgModule, Provider } from '@angular/core';
import { HttpModule, } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MainFooterComponent } from './component/main-footer/main-footer.component';
import { NavComponent } from './component/nav/nav.component';
import { ModalComponent } from './component/modal/modal.component';
import { ModalService } from './service/modal.service';
import { ControlMessagesComponent } from './component/control-messages/control-messages.component';
import { ClickOutsideDirective } from './directive/click-out-side.directive';
import { ErrorMessageComponent } from './component/error-message/error-message.component';
import { DropdownModule } from './component/dropdown/dropdown.module';
import { RatingModule } from './component/rating/rating.module';
import { FormatLinkPipe } from './pipes/format-link.pipe';
import { AccordionComponent } from './component/accordion/accordion.component';
import { AccordionItemComponent } from './component/accordion/accordion-item/accordion-item.component';

export const COMMON_MODULES: any[] = [
  FormsModule,
  ReactiveFormsModule,
  CommonModule,
  HttpModule,
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
  AccordionComponent,
  AccordionItemComponent,
  ClickOutsideDirective,
  FormatLinkPipe
];

export const CORE_PROVIDERS: any[] = [
  ModalService
];

@NgModule({
  imports: [
    ...COMMON_MODULES
  ],
  declarations: [
    ...SHARED_COMPONENT
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
