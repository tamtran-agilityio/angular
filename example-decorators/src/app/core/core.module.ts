import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { LoggerService } from '@app/core/services/logger.service';
import { HttpWrapperModule } from '@app/core/decorators/http-wrapper';

export const CORE_PROVIDERS: any[] = [
  LoggerService,
];

@NgModule({
  imports: [
    CommonModule,
    HttpWrapperModule
  ],
  declarations: [
  ],
  providers: [
    ...CORE_PROVIDERS
  ]
})
export class CoreModule { }
