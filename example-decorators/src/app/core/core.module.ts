import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { LoggerService } from '@app/core/services/logger.service';

export const CORE_PROVIDERS: any[] = [
  LoggerService
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  providers: [
    ...CORE_PROVIDERS
  ]
})
export class CoreModule { }
