import { TestBed, inject } from '@angular/core/testing';

import { AchieveGoalsService } from './achieve-goals.service';

describe('AchieveGoalsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AchieveGoalsService]
    });
  });

  it('should be created', inject([AchieveGoalsService], (service: AchieveGoalsService) => {
    expect(service).toBeTruthy();
  }));
});
