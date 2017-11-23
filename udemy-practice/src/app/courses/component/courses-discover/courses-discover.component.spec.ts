import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesDiscoverComponent } from './courses-discover.component';

describe('CoursesDiscoverComponent', () => {
  let component: CoursesDiscoverComponent;
  let fixture: ComponentFixture<CoursesDiscoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesDiscoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesDiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
