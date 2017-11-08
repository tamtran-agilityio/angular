import { NgModule } from '@angular/core';
import { LoggerService } from './logger.service';
import { HttpWrapper } from './http-wrapper';
import { AppConfig } from './app-config';

export const CORE_PROVIDERS: any[] = [
  AppConfig,
  LoggerService,
  HttpWrapper
];

export const PIPE: any[] = [

];

@NgModule({
  imports: [
  ],
  declarations: [
  ],
  providers: [
    ...CORE_PROVIDERS
  ],
  exports: [
  ]
})
export class CoreModule { }
