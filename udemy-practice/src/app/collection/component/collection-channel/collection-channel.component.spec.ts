import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionChannelComponent } from './collection-channel.component';

describe('CollectionChannelComponent', () => {
  let component: CollectionChannelComponent;
  let fixture: ComponentFixture<CollectionChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
