import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AccordionComponent } from '@ngb-example/bootstrap/src/components/accordion/accordion.component';
import { AlertComponent } from '@ngb-example/bootstrap/src/components/alert/alert.component';
import { ButtonComponent } from '@ngb-example/bootstrap/src/components/button/button.component';
import { CarouselComponent } from '@ngb-example/bootstrap/src/components/carousel/carousel.component';
import { CollapseComponent } from '@ngb-example/bootstrap/src/components/collapse/collapse.component';
import { DatepickerComponent } from '@ngb-example/bootstrap/src/components/datepicker/datepicker.component';
import { DropdownComponent } from '@ngb-example/bootstrap/src/components/dropdown/dropdown.component';
import { ModalComponent } from '@ngb-example/bootstrap/src/components/modal/modal.component';
import { ModalContent } from '@ngb-example/bootstrap/src/components/modal/modal.content.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PopoverComponent } from './popover/popover.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { RatingComponent } from './rating/rating.component';
import { TabsComponent } from './tabs/tabs.component';
import { TimepickerComponent } from './timepicker/timepicker.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';

export const COMMON_MODULES: any[] = [ReactiveFormsModule, FormsModule, CommonModule, NgbModule.forRoot()];

export const BOOTSTRAP_COMPONENTS: any[] = [
  AccordionComponent,
  AlertComponent,
  ButtonComponent,
  CarouselComponent,
  CollapseComponent,
  DatepickerComponent,
  DropdownComponent,
  ModalComponent,
  ModalContent,
  PaginationComponent,
  PopoverComponent,
  ProgressbarComponent,
  RatingComponent,
  TabsComponent,
  TimepickerComponent,
  TooltipComponent,
  TypeaheadComponent
];

export const ENTRY_COMPONENTS: any[] = [ModalContent];

export const PROVIDERS: any[] = [NgbActiveModal];

@NgModule({
  imports: [...COMMON_MODULES],
  entryComponents: [...ENTRY_COMPONENTS],
  declarations: [...BOOTSTRAP_COMPONENTS],
  exports: [...BOOTSTRAP_COMPONENTS],
  providers: [PROVIDERS]
})
export class BootstrapModule {}
