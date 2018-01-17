import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionComponent } from '@ngb-example/bootstrap/src/components/accordion/accordion.component';
import { AlertComponent } from '@ngb-example/bootstrap/src/components/alert/alert.component';
import { ButtonComponent } from '@ngb-example/bootstrap/src/components/button/button.component';
import { CarouselComponent } from '@ngb-example/bootstrap/src/components/carousel/carousel.component';
import { CollapseComponent } from '@ngb-example/bootstrap/src/components/collapse/collapse.component';
import { DatepickerComponent } from '@ngb-example/bootstrap/src/components/datepicker/datepicker.component';
import { DropdownComponent } from '@ngb-example/bootstrap/src/components/dropdown/dropdown.component';
import { ModalComponent } from '@ngb-example/bootstrap/src/components/modal/modal.component';
import { NgbModalContent } from '@ngb-example/bootstrap/src/components/modal/modal-content.component';

export const COMMON_MODULES: any[] = [FormsModule, CommonModule, NgbModule.forRoot()];

export const BOOTSTRAP_COMPONENTS: any[] = [
  AccordionComponent,
  AlertComponent,
  ButtonComponent,
  CarouselComponent,
  CollapseComponent,
  DatepickerComponent,
  DropdownComponent,
  ModalComponent
];

@NgModule({
  imports: [...COMMON_MODULES],
  declarations: [...BOOTSTRAP_COMPONENTS],
  exports: [...BOOTSTRAP_COMPONENTS]
})
export class BootstrapModule {}
