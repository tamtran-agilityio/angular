import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesSearchItemComponent } from './courses-search-item.component';

describe('CoursesSearchItemComponent', () => {
  let component: CoursesSearchItemComponent;
  let fixture: ComponentFixture<CoursesSearchItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesSearchItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesSearchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
