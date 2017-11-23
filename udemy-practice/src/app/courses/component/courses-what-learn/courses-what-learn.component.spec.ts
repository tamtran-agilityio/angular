import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesWhatLearnComponent } from './courses-what-learn.component';

describe('CoursesWhatLearnComponent', () => {
  let component: CoursesWhatLearnComponent;
  let fixture: ComponentFixture<CoursesWhatLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesWhatLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesWhatLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
