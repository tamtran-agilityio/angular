import { NgModule } from '@angular/core';
import { HttpWrapperService } from '@app/core/services/http-wrapper.service';
import { AppConfigService } from '@app/core/services/app-config.service';

export const CORE_PROVIDERS: any[] = [
  HttpWrapperService,
  AppConfigService
];

@NgModule({
  imports: [],
  exports: [],
  providers: [
    ...CORE_PROVIDERS
  ]
})

export class CoreModule { }
