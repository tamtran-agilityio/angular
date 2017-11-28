import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarylayoutComponent } from './primarylayout.component';

describe('PrimarylayoutComponent', () => {
  let component: PrimarylayoutComponent;
  let fixture: ComponentFixture<PrimarylayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimarylayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimarylayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
