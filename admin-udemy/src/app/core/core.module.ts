import {
  NgModule
} from '@angular/core';

import {
  AppConfigService
} from '@app/core/services/app-config.service';
import {
  HttpWrapperService
} from '@app/core/services/http-wrapper.service';

export const CORE_PROVIDERS: any[] = [
  AppConfigService,
  HttpWrapperService
];

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    ...CORE_PROVIDERS
  ]
})
export class CoreModule { }
