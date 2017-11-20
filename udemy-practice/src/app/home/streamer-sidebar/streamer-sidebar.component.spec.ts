import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamerSidebarComponent } from './streamer-sidebar.component';

describe('StreamerSidebarComponent', () => {
  let component: StreamerSidebarComponent;
  let fixture: ComponentFixture<StreamerSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamerSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
