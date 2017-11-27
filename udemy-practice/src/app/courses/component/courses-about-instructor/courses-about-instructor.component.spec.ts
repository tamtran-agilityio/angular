import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesAboutInstructorComponent } from './courses-about-instructor.component';

describe('CoursesAboutInstructorComponent', () => {
  let component: CoursesAboutInstructorComponent;
  let fixture: ComponentFixture<CoursesAboutInstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesAboutInstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesAboutInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
