import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
@Injectable()
export class AppConfigService {

  constructor() { }

  API: any = {
    API_ROOT: environment.API_ROOT
  };

  URL_TABLES = {
    POST: 'posts/'
  };

}
