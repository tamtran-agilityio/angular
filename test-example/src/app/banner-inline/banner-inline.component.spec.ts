import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BannerInlineComponent } from './banner-inline.component';

describe('BannerInlineComponent', () => {
  let component: BannerInlineComponent;
  let fixture: ComponentFixture<BannerInlineComponent>;
  let fixtured: ComponentFixture<BannerInlineComponent>;
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
    fixtured = TestBed.overrideComponent(BannerInlineComponent, {
      set: {
        template: '<h2>{{title}}</h2>'
      }
    })
    .createComponent(BannerInlineComponent);
    fixtured.detectChanges();
  });

  it('should set the title', async(inject([], () => {
    fixtured.componentInstance.setMessage('Test title');
    fixtured.detectChanges();
    fixtured.whenStable().then(() => {
      const compiled = fixtured.debugElement.nativeElement;
      expect(compiled.querySelector('h2')).toEqual(null);
    });
  })));

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
    expect(el.textContent).toEqual('banner-inline works!');
  });

  it('should set the title', async(inject([], () => {
    component.setMessage('Test title');
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('p').innerText).toEqual('Test title');
    });
  })));
});
