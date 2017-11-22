import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesIntroductionComponent } from './courses-introduction.component';

describe('CoursesIntroductionComponent', () => {
  let component: CoursesIntroductionComponent;
  let fixture: ComponentFixture<CoursesIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
