import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesEnrollComponent } from './courses-enroll.component';

describe('CoursesEnrollComponent', () => {
  let component: CoursesEnrollComponent;
  let fixture: ComponentFixture<CoursesEnrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesEnrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesEnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
