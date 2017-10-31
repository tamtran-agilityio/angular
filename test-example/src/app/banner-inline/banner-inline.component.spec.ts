import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BannerInlineComponent } from './banner-inline.component';

describe('BannerInlineComponent', () => {
  let component: BannerInlineComponent;
  let fixture: ComponentFixture<BannerInlineComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerInlineComponent ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerInlineComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('p'));
    el = de.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(' no title in the DOM until manually call `detectChanges()` ', () => {
    expect(el.textContent).toEqual('banner-inline works!');
  });

  it(' should `banner-inline works!` when add detect Changes', () => {
    fixture.detectChanges();
    expect(el.textContent).toEqual('banner-inline works!');
  });
});
