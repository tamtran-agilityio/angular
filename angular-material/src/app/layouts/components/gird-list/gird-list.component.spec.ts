import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GirdListComponent } from './gird-list.component';

describe('GirdListComponent', () => {
  let component: GirdListComponent;
  let fixture: ComponentFixture<GirdListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GirdListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GirdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
