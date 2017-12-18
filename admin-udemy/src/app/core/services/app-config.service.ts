import {
  Injectable
} from '@angular/core';

import {
  environment
} from '@env/environment';

@Injectable()
export class AppConfigService {
  API: any = {
    API_ROOT: environment.API_ROOT
  };

  API_URLS: {
    USERS: 'users/',
    COURSES: 'courses/'
  };

}
