import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ControlMessagesComponent } from './messages/control-messages.component';
import { ValidationService } from './validation.service';

@NgModule({
  declarations: [
    ControlMessagesComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [ ValidationService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
