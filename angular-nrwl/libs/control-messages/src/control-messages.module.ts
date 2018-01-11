import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ControlMessageComponent } from './control-message/control-message.component';

export const controlMessagesRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule, ControlMessageComponent],
  declarations: [ControlMessageComponent],
  exports: [ControlMessageComponent]
})
export class ControlMessagesModule {}
