import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatRadioModule,
  MatCardModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatSelectModule,
  MatSliderModule,
} from '@angular/material';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './components/form/form.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { SelectComponent } from './components/select/select.component';
import { SliderComponent } from './components/slider/slider.component';
import { SlideToggleComponent } from './components/slide-toggle/slide-toggle.component';

@NgModule({
  declarations: [
    FormComponent,
    DatepickerComponent,
    CheckboxComponent,
    AutocompleteComponent,
    FormFieldComponent,
    SelectComponent,
    SliderComponent,
    SlideToggleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormRoutingModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSelectModule,
    MatSliderModule,
  ]
})
export class FormModule { }
