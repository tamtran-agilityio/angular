import {
  NgModule,
  Provider
} from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule, } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MainFooterComponent } from '@app/shared/components/main-footer/main-footer.component';
import { NavComponent } from '@app/shared/components/nav/nav.component';
import { ModalComponent } from '@app/shared/components/modal/modal.component';
import { ModalService } from '@app/shared/services/modal.service';
import { ControlMessagesComponent } from '@app/shared/components/control-messages/control-messages.component';
import { ClickOutsideDirective } from '@app/shared/directives/click-out-side.directive';
import { ErrorMessageComponent } from '@app/shared/components/error-message/error-message.component';
import { DropdownModule } from '@app/shared/components/dropdown/dropdown.module';
import { FormatLinkPipe } from '@app/shared/pipes/format-link.pipe';
import { AccordionComponent } from '@app/shared/components/accordion/accordion.component';
import { AccordionItemComponent } from '@app/shared/components/accordion/accordion-item/accordion-item.component';
import { SetbackgroundDirective } from '@app/shared/directives/setbackground.directive';
import { PrimarylayoutComponent } from '@app/shared/components/primarylayout/primarylayout.component';
import { CoreModule } from '@app/core/core.module';
import { StarRatingModule } from 'angular-star-rating';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

export const COMMON_MODULES: any[] = [
  FormsModule,
  ReactiveFormsModule,
  CommonModule,
  HttpModule,
  CoreModule,
  RouterModule,
  DropdownModule,
  StarRatingModule,
  Ng2CarouselamosModule
];

export const SHARED_COMPONENT: any[] = [
  MainFooterComponent,
  NavComponent,
  ModalComponent,
  ControlMessagesComponent,
  PrimarylayoutComponent,
  ErrorMessageComponent,
  AccordionComponent,
  AccordionItemComponent,
  ClickOutsideDirective,
  SetbackgroundDirective
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
