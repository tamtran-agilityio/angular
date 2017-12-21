import {
  Injectable
} from '@angular/core';

import {
  Observable
} from 'rxjs/Observable';

import {
  HttpWrapperService
} from '@app/core/services/http-wrapper.service';
import {
  Course
} from '@app/course/models/course';
import {
  AppConfigService
} from '@app/core/services/app-config.service';

@Injectable()
export class CourseService {

  private courseTable = '';
  constructor(
    private httpWrapper: HttpWrapperService,
    private appConfig: AppConfigService
  ) {
    this.courseTable = this.appConfig.API_URLS.COURSE;
  }

  /**
   * Get all course
   */
  getCouser(): Observable<Course> {
    return Observable.create(obs => {
      obs.next(this.httpWrapper.get(this.courseTable));
    });
  }

}
