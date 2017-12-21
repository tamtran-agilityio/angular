import { TestBed, inject } from '@angular/core/testing';

import { CourseHelperService } from './course-helper.service';

describe('CourseHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseHelperService]
    });
  });

  it('should be created', inject([CourseHelperService], (service: CourseHelperService) => {
    expect(service).toBeTruthy();
  }));
});
