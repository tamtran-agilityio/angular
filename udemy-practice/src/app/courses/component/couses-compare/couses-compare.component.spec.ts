import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CousesCompareComponent } from './couses-compare.component';

describe('CousesCompareComponent', () => {
  let component: CousesCompareComponent;
  let fixture: ComponentFixture<CousesCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CousesCompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CousesCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
