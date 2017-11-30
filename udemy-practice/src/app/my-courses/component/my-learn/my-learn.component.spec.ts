import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLearnComponent } from './my-learn.component';

describe('MyLearnComponent', () => {
  let component: MyLearnComponent;
  let fixture: ComponentFixture<MyLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
