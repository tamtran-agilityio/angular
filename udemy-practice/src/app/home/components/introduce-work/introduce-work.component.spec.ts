import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduceWorkComponent } from './introduce-work.component';

describe('IntroduceWorkComponent', () => {
  let component: IntroduceWorkComponent;
  let fixture: ComponentFixture<IntroduceWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroduceWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroduceWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
