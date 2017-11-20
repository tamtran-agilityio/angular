import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchieveGoalsComponent } from './achieve-goals.component';

describe('AchieveGoalsComponent', () => {
  let component: AchieveGoalsComponent;
  let fixture: ComponentFixture<AchieveGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchieveGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchieveGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
