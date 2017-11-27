import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesAccordionComponent } from './courses-accordion.component';

describe('CoursesAccordionComponent', () => {
  let component: CoursesAccordionComponent;
  let fixture: ComponentFixture<CoursesAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
