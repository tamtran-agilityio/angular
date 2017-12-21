import { TestBed, inject } from '@angular/core/testing';

import { UserValidationService } from './user-validation.service';

describe('UserValidationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserValidationService]
    });
  });

  it('should be created', inject([UserValidationService], (service: UserValidationService) => {
    expect(service).toBeTruthy();
  }));
});
