import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyArchivedComponent } from './my-archived.component';

describe('MyArchivedComponent', () => {
  let component: MyArchivedComponent;
  let fixture: ComponentFixture<MyArchivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyArchivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyArchivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
