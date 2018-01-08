import { Injectable } from '@angular/core';
import { AppConfigService } from '@app/core/services/app-config.service';
import { HttpWrapperService } from '@app/core/services/http-wrapper.service';

@Injectable()
export class TodoService {

  constructor(
    private appConfig: AppConfigService,
    private httpWrapper: HttpWrapperService
  ) { }

  getTodos() {
    let url = this.appConfig.URL_TABLES.TODO;
    return this.httpWrapper.get(url);
  }

}
