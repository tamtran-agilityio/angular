import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorBusinessComponent } from './instructor-business.component';

describe('InstructorBusinessComponent', () => {
  let component: InstructorBusinessComponent;
  let fixture: ComponentFixture<InstructorBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
