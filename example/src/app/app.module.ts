import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ControlMessagesComponent } from './messages/control-messages.component';
import { ValidationService } from './validation.service';
import { ValidatorAddressDirective } from './validator-address.directive';

@NgModule({
  declarations: [
    ControlMessagesComponent,
    AppComponent,
    ValidatorAddressDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [ ValidationService, ValidatorAddressDirective ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
