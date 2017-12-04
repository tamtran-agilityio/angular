import {
  Component,
  ElementRef,
  Renderer,
  Input,
  Output,
  OnInit,
  OnDestroy,
  AfterViewInit,
  HostListener,
  EventEmitter,
  ContentChildren,
  QueryList,
  ViewChild,
  AfterContentInit,
  ViewChildren,
  ContentChild,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import * as Hammer from 'hammerjs';
import { Subscription } from 'rxjs/Subscription';

import { Carousel } from '../../modal/carousel';
import { Store } from '../../modal/store';
import { CarouselItemDirective } from '../../directive/carousel-item.directive';
import { CarouselPreDirective } from '../../directive/carousel-pre.directive';
import { CarouselNextDirective } from '../../directive/carousel-next.directive';

@Component({
  selector: 'carousel-slide',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterContentInit, AfterViewInit, OnDestroy, OnChanges {
  itemsSubscribe: Subscription;
  carouselCssNode: any;
  pointIndex: number;
  pointers: number;

  // tslint:disable-next-line:no-input-rename
  @Input('inputs') userData: any;
  @Input('moveToSlide') moveToSlide: number;

  @Output('carouselLoad') carouselLoad = new EventEmitter();
  @Output('onMove') onMove = new EventEmitter();
  @Output('afterCarouselViewed') afterCarouselViewed = new EventEmitter();

  @ContentChildren(CarouselItemDirective)
  private items: QueryList<CarouselItemDirective>;
  @ViewChildren('pointInner', { read: ElementRef })
  private points: QueryList<ElementRef>;

  @ContentChild(CarouselNextDirective, { read: ElementRef })
  private next: ElementRef;
  @ContentChild(CarouselPreDirective, { read: ElementRef })
  private prev: ElementRef;

  @ViewChild('carousel', { read: ElementRef })
  private carouselMain1: ElementRef;
  @ViewChild('items', { read: ElementRef })
  private carouselInner1: ElementRef;
  @ViewChild('main', { read: ElementRef })
  private carousel1: ElementRef;
  @ViewChild('points', { read: ElementRef })
  private pointMain: ElementRef;
  @ViewChild('forTouch', { read: ElementRef })
  private forTouch: ElementRef;

  private leftBtn: any;
  private rightBtn: any;
  private evtValue: number;
  private pauseCarousel = false;
  private pauseInterval: any;

  private carousel: any;
  private carouselMain: any;
  private carouselInner: any;
  private carouselItems: any;

  private onResize: any;
  private onScrolling: any;
  private carouselInt: any;

  public Arr1 = Array;
  public pointNumbers: Array<any> = [];
  public data: Store = {
    type: 'fixed',
    classText: '',
    deviceType: 'lg',
    items: 0,
    load: 0,
    deviceWidth: 0,
    carouselWidth: 0,
    itemWidth: 0,
    visibleItems: { start: 0, end: 0 },
    slideItems: 0,
    itemWidthPer: 0,
    itemLength: 0,
    currentSlide: 0,
    easing: 'cubic-bezier(0, 0, 0.2, 1)',
    speed: 400,
    transform: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0, all: 0 },
    loop: false,
    dexVal: 0,
    touchTransform: 0,
    touch: { active: false, swipe: '', velocity: 0 },
    isEnd: false,
    isFirst: true,
    isLast: false
  };

  constructor(private el: ElementRef, private renderer: Renderer) {}
  ngOnInit() {
    this.carousel = this.el.nativeElement;
    this.carouselMain = this.carouselMain1.nativeElement;
    this.carouselInner = this.carouselInner1.nativeElement;
    this.carouselItems = this.carouselInner.getElementsByClassName('item');

    this.rightBtn = this.next.nativeElement;
    this.leftBtn = this.prev.nativeElement;

    this.data.type = this.userData.grid.all !== 0 ? 'fixed' : 'responsive';
    this.data.loop = this.userData.loop || false;
    this.data.easing = this.userData.easing || 'cubic-bezier(0, 0, 0.2, 1)';
    this.data.touch.active = this.userData.touch || false;

    this.carouselSize();
  }

  ngAfterContentInit() {
    this.renderer.listen(this.leftBtn, 'click', () =>
      this.carouselScrollOne(0)
    );
    this.renderer.listen(this.rightBtn, 'click', () =>
      this.carouselScrollOne(1)
    );

    this.carouselCssNode = this.renderer.createElement(this.carousel, 'style');

    this.storeCarouselData();
    this.carouselInterval();
    this.onWindowScrolling();
    this.buttonControl();
    this.touch();

    this.itemsSubscribe = this.items.changes.subscribe(val => {
      this.data.isLast = false;
      this.carouselPoint();
      this.buttonControl();
    });
    // tslint:disable-next-line:no-unused-expression
    this.moveToSlide && this.moveTo(this.moveToSlide);
  }

  ngAfterViewInit() {
    if (this.userData.point.pointStyles) {
      const datas = this.userData.point.pointStyles.replace(
        /.carouselPoint/g,
        `.${this.data.classText} .carouselPoint`
      );

      const pointNode = this.renderer.createElement(this.carousel, 'style');
      this.renderer.createText(pointNode, datas);
    } else if (this.userData.point && this.userData.point.visible) {
      this.renderer.setElementClass(
        this.pointMain.nativeElement,
        'carouselPointDefault',
        true
      );
    }
    this.afterCarouselViewed.emit(this.data);
  }

  ngOnDestroy() {
    clearInterval(this.carouselInt);
    // tslint:disable-next-line:no-unused-expression
    this.itemsSubscribe && this.itemsSubscribe.unsubscribe();
  }

  @HostListener('window:resize', ['$event'])
  onResizing(event: any) {
    clearTimeout(this.onResize);
    this.onResize = setTimeout(() => {
      // tslint:disable-next-line:no-unused-expression
      this.data.deviceWidth !== event.target.outerWidth &&
        this.storeCarouselData();
    }, 500);
  }

  ngOnChanges(changes: SimpleChanges) {
    // tslint:disable-next-line:no-unused-expression
    this.moveToSlide &&
      !changes.moveToSlide.firstChange &&
      this.moveTo(changes.moveToSlide.currentValue);
    }

  /* store data based on width of the screen for the carousel */
  private storeCarouselData(): void {
    this.data.deviceWidth = window.innerWidth;
    this.data.carouselWidth = this.carouselMain.offsetWidth;
    // const datas = this.items.first.nativeElement.getBoundingClientRect().width;
    if (this.data.type === 'responsive') {
      this.data.deviceType =
      this.data.deviceWidth >= 1200
        ? 'xl'
          : this.data.deviceWidth >= 992
            ? 'lg'
            : this.data.deviceWidth >= 768
              ? 'md'
              : this.data.deviceWidth >= 576 ? 'sm' : 'xs';
      this.data.items = this.userData.grid[this.data.deviceType];
      this.data.itemWidth = this.data.carouselWidth / this.data.items;
    } else {
      this.data.items = Math.trunc(
        this.data.carouselWidth / this.userData.grid.all
      );
      this.data.itemWidth = this.userData.grid.all;
      this.data.deviceType = 'all';
    }

    this.data.slideItems = +(this.userData.slide < this.data.items
      ? this.userData.slide
      : this.data.items);
    this.data.load =
      this.userData.load >= this.data.slideItems
        ? this.userData.load
        : this.data.slideItems;
    this.data.speed =
      this.userData.speed || this.userData.speed > -1
        ? this.userData.speed
        : 400;
    this.carouselPoint();
  }

  /* Get Touch input */
  private touch(): void {
    if (this.data.touch.active) {
      const hammertime = new Hammer(this.forTouch.nativeElement);
      hammertime.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL });

      hammertime.on('panstart', (ev: any) => {
        this.data.carouselWidth = this.carouselInner.offsetWidth;
        this.data.touchTransform = this.data.transform[this.data.deviceType];

        this.data.dexVal = 0;
        this.setStyle(this.carouselInner, 'transition', '');
      });
      hammertime.on('panleft', (ev: any) => {
        this.touchHandling('panleft', ev);
      });
      hammertime.on('panright', (ev: any) => {
        this.touchHandling('panright', ev);
      });
      hammertime.on('panend', (ev: any) => {
        // this.setStyle(this.carouselInner, 'transform', '');
        this.data.touch.velocity = ev.velocity;
        this.data.touch.swipe === 'panright'
          ? this.carouselScrollOne(0)
          : this.carouselScrollOne(1);
      });
      hammertime.on('hammer.input', function(ev) {
        // allow nested touch events to no propagate, this may have other side affects but works for now.
        // TODO: It is probably better to check the source element of the event and only apply the handle to the correct carousel
        ev.srcEvent.stopPropagation();
      });
    }
  }

  /* handle touch input */
  private touchHandling(e: string, ev: any): void {

    // vertical touch events seem to cause to panstart event with an odd delta
    // and a center of {x:0,y:0} so this will ignore them
    if (ev.center.x === 0) { return; }

    ev = Math.abs(ev.deltaX);
    let valt = ev - this.data.dexVal;
    valt =
      this.data.type === 'responsive'
        ? Math.abs(ev - this.data.dexVal) / this.data.carouselWidth * 100
        : valt;
    this.data.dexVal = ev;
    this.data.touch.swipe = e;
    this.data.touchTransform =
      e === 'panleft'
        ? valt + this.data.touchTransform
        : this.data.touchTransform - valt;

    if (this.data.touchTransform > 0) {
      this.setStyle(
        this.carouselInner,
        'transform',
        this.data.type === 'responsive'
          ? `translate3d(-${this.data.touchTransform}%, 0px, 0px)`
          : `translate3d(-${this.data.touchTransform}px, 0px, 0px)`
      );
    } else {
      this.data.touchTransform = 0;
    }
  }

  /* this used to disable the scroll when it is not on the display */
  private onWindowScrolling(): void {
    const top = this.carousel.offsetTop;
    const scrollY = window.scrollY;
    const heightt = window.innerHeight;
    const carouselHeight = this.carousel.offsetHeight;

    if (
      top <= scrollY + heightt - carouselHeight / 4 &&
      top + carouselHeight / 2 >= scrollY
    ) {
      this.carouselIntervalEvent(0);
    } else {
      this.carouselIntervalEvent(1);
    }
  }

  /* Init carousel point */
  private carouselPoint(): void {
    // if (this.userData.point.visible === true) {
    const Nos = this.items.length - (this.data.items - this.data.slideItems);
    this.pointIndex = Math.ceil(Nos / this.data.slideItems);
    const pointers = [];
    for (let i = 0; i < this.pointIndex; i++) {
      pointers.push(i);
    }
    this.pointNumbers = pointers;
    this.carouselPointActiver();
    if (this.pointIndex <= 1) {
      this.btnBoolean(1, 1);
      // this.data.isFirst = true;
      // this.data.isLast = true;
    } else {
      if (this.data.currentSlide === 0 && !this.data.loop) {
        this.btnBoolean(1, 0);
      } else {
        this.btnBoolean(0, 0);
      }
    }
    this.buttonControl();
    // }
  }

  /* change the active point in carousel */
  private carouselPointActiver(): void {
    const i = Math.ceil(this.data.currentSlide / this.data.slideItems);
    this.pointers = i;
  }

  /* this function is used to scoll the carousel when point is clicked */
  public moveTo(index: number) {
    if (this.data.currentSlide !== index && index < this.pointIndex) {
      let slideremains = 0;
      const btns = this.data.currentSlide < index ? 1 : 0;

      if (index === 0) {
        this.btnBoolean(1, 0);
        slideremains = index * this.data.slideItems;
      } else if (index === this.pointIndex - 1) {
        this.btnBoolean(0, 1);
        slideremains = this.items.length - this.data.items;
      } else {
        this.btnBoolean(0, 0);
        slideremains = index * this.data.slideItems;
      }
      this.carouselScrollTwo(btns, slideremains, this.data.speed);
    }
  }

  /* set the style of the carousel based the inputs data */
  private carouselSize(): void {
    this.data.classText = this.generateID();
    let dism = '';
    const styleid = '.' + this.data.classText + ' > .carousel > .carousel-inner > .carousel-items >';

    if (this.userData.custom === 'banner') {
      this.renderer.setElementClass(this.carousel, 'banner', true);
    }

    // if (this.userData.animation && this.userData.animation.animateStyles) {
    //   dism += `${styleid} .customAnimation {${this.userData.animation
    //     .animateStyles.style}} ${styleid} .item {transition: .3s ease all}`;
    // }
    if (this.userData.animation === 'lazy') {
      dism += `${styleid} .item {transition: transform .6s ease;}`;
    }

    let itemStyle = '';
    if (this.data.type === 'responsive') {
      const itemWidth_xs =
        this.userData.type === 'mobile'
          ? `${styleid} .item {width: ${95 / this.userData.grid.xs}%}`
          : `${styleid} .item {width: ${100 / this.userData.grid.xs}%}`;

      const itemWidth_sm =
        styleid + ' .item {width: ' + 100 / this.userData.grid.sm + '%}';
      const itemWidth_md =
        styleid + ' .item {width: ' + 100 / this.userData.grid.md + '%}';
      const itemWidth_lg =
        styleid + ' .item {width: ' + 100 / this.userData.grid.lg + '%}';
        const itemWidth_xl =
        styleid + ' .item {width: ' + 100 / this.userData.grid.xl + '%}';

      itemStyle = `@media (max-width:540px){${itemWidth_xs}}
                    @media (min-width:767px){${itemWidth_sm}}
                    @media (min-width:992px){${itemWidth_md}}
                    @media (min-width:1200px){${itemWidth_lg}}
                    @media (min-width:1400px){${itemWidth_xl}}`;
    } else {
      itemStyle = `${styleid} .item {width: ${this.userData.grid.all}px}`;
    }

    this.renderer.setElementClass(this.carousel, this.data.classText, true);
    const styleItem = this.renderer.createElement(this.carousel, 'style');
    this.renderer.createText(styleItem, `${dism} ${itemStyle}`);
  }

  /* logic to scroll the carousel step 1 */
  private carouselScrollOne(Btn: number): void {
    let itemSpeed = this.data.speed;
    let translateXval,
      currentSlide = 0;
    const touchMove = Math.ceil(this.data.dexVal / this.data.itemWidth);
    this.setStyle(this.carouselInner, 'transform', '');

    if (this.pointIndex === 1) {
      return;
    } else if (
      Btn === 0 &&
      ((!this.data.loop && !this.data.isFirst) || this.data.loop)
    ) {
      const slide = this.data.slideItems * this.pointIndex;

      const currentSlideD = this.data.currentSlide - this.data.slideItems;
      const MoveSlide = currentSlideD + this.data.slideItems;
      this.btnBoolean(0, 1);
      if (this.data.currentSlide === 0) {
        currentSlide = this.items.length - this.data.items;
        itemSpeed = 400;
        this.btnBoolean(0, 1);
      } else if (this.data.slideItems >= MoveSlide) {
        currentSlide = translateXval = 0;
        this.btnBoolean(1, 0);
      } else {
        this.btnBoolean(0, 0);
        if (touchMove > this.data.slideItems) {
          currentSlide = this.data.currentSlide - touchMove;
          itemSpeed = 200;
        } else {
          currentSlide = this.data.currentSlide - this.data.slideItems;
        }
      }
      this.carouselScrollTwo(Btn, currentSlide, itemSpeed);
    } else if (Btn === 1 && ((!this.data.loop && !this.data.isLast) || this.data.loop)) {
      if (
        this.items.length <=
          this.data.currentSlide + this.data.items + this.data.slideItems &&
        !this.data.isLast
      ) {
        currentSlide = this.items.length - this.data.items;
        this.btnBoolean(0, 1);
      } else if (this.data.isLast) {
        currentSlide = translateXval = 0;
        itemSpeed = 400;
        this.btnBoolean(1, 0);
      } else {
        this.btnBoolean(0, 0);
        if (touchMove > this.data.slideItems) {
          currentSlide =
            this.data.currentSlide +
            this.data.slideItems +
            (touchMove - this.data.slideItems);
          itemSpeed = 200;
        } else {
          currentSlide = this.data.currentSlide + this.data.slideItems;
        }
      }
      this.carouselScrollTwo(Btn, currentSlide, itemSpeed);
    }

    // cubic-bezier(0.15, 1.04, 0.54, 1.13)
  }

  /* logic to scroll the carousel step 2 */
  private carouselScrollTwo(
    Btn: number,
    currentSlide: number,
    itemSpeed: number
  ): void {
    this.data.visibleItems.start = currentSlide;
    this.data.visibleItems.end = currentSlide + this.data.items - 1;
    // tslint:disable-next-line:no-unused-expression
    this.userData.animation &&
      this.carouselAnimator(
        Btn,
        currentSlide + 1,
        currentSlide + this.data.items,
        itemSpeed,
        Math.abs(this.data.currentSlide - currentSlide)
      );
    if (this.data.dexVal !== 0) {
      // const first = .5;
      // const second = .50;
      // tslint:disable-next-line:max-line-length
      // this.setStyle(this.carouselInner, 'transition', `transform ${itemSpeed}ms ${this.userData.easing}`);
      // } else {
      const val = Math.abs(this.data.touch.velocity);
      // const first = .7 / val < .5 ? .7 / val : .5;
      // const second = (2.9 * val / 10 < 1.3) ? (2.9 * val) / 10 : 1.3;
      let somt = Math.floor(
        this.data.dexVal /
          val /
          this.data.dexVal *
          (this.data.deviceWidth - this.data.dexVal)
      );
      somt = somt > itemSpeed ? itemSpeed : somt;
      itemSpeed = somt < 200 ? 200 : somt;
      // tslint:disable-next-line:max-line-length
      // this.setStyle(this.carouselInner, 'transition', `transform ${itemSpeed}ms ${this.userData.easing}`);
      // this.carouselInner.style.transition = `transform ${itemSpeed}ms cubic-bezier(0.15, 1.04, 0.54, 1.13) `;
      this.data.dexVal = 0;
    }
    this.setStyle(
      this.carouselInner,
      'transition',
      `transform ${itemSpeed}ms ${this.data.easing}`
    );
    this.data.itemLength = this.items.length;
    this.transformStyle(currentSlide);
    this.data.currentSlide = currentSlide;
    this.onMove.emit(this.data);
    this.carouselPointActiver();
    this.carouselLoadTrigger();
    this.buttonControl();
  }

  /* boolean function for making isFirst and isLast */
  private btnBoolean(first: number, last: number) {
    this.data.isFirst = first ? true : false;
    this.data.isLast = last ? true : false;
  }

  /* set the transform style to scroll the carousel  */
  private transformStyle(slide: number): void {
    let slideCss = '';
    if (this.data.type === 'responsive') {
      this.data.transform.xs = 100 / this.userData.grid.xs * slide;
      this.data.transform.sm = 100 / this.userData.grid.sm * slide;
      this.data.transform.md = 100 / this.userData.grid.md * slide;
      this.data.transform.lg = 100 / this.userData.grid.lg * slide;
      slideCss = `@media (max-width: 767px) {
              .${this.data
                .classText} > .carousel > .carousel-inner > .carousel-items { transform: translate3d(-${this
        .data.transform.xs}%, 0, 0); } }
            @media (min-width: 768px) {
              .${this.data
                .classText} > .carousel > .carousel-inner > .carousel-items { transform: translate3d(-${this
        .data.transform.sm}%, 0, 0); } }
            @media (min-width: 992px) {
              .${this.data
                .classText} > .carousel > .carousel-inner > .carousel-items { transform: translate3d(-${this
        .data.transform.md}%, 0, 0); } }
            @media (min-width: 1200px) {
              .${this.data
                .classText} > .carousel > .carousel-inner > .carousel-items { transform: translate3d(-${this
        .data.transform.lg}%, 0, 0); } }`;
    } else {
      this.data.transform.all = this.userData.grid.all * slide;
      slideCss = `.${this.data
        .classText} > .carousel > .carousel-inner > .carousel-items { transform: translate3d(-${this.data
        .transform.all}px, 0, 0);`;
    }
    // this.renderer.createText(this.carouselCssNode, slideCss);
    this.carouselCssNode.innerHTML = slideCss;
  }

  /* this will trigger the carousel to load the items */
  private carouselLoadTrigger(): void {
    if (typeof this.userData.load === 'number') {
      // tslint:disable-next-line:no-unused-expression
      this.items.length - this.data.load <=
        this.data.currentSlide + this.data.items &&
        this.carouselLoad.emit(this.data.currentSlide);
    }
  }

  /* generate Class for each carousel to set specific style */
  private generateID(): string {
    let text = '';
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 6; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return `carousel${text}`;
  }

  /* handle the auto slide */
  private carouselInterval(): void {
    if (typeof this.userData.interval === 'number' && this.data.loop) {
      this.renderer.listen(this.carouselMain, 'touchstart', () => {
        this.carouselIntervalEvent(1);
      });

      this.renderer.listen(this.carouselMain, 'touchend', () => {
        this.carouselIntervalEvent(0);
      });

      this.renderer.listen(this.carouselMain, 'mouseenter', () => {
        this.carouselIntervalEvent(1);
      });

      this.renderer.listen(this.carouselMain, 'mouseleave', () => {
        this.carouselIntervalEvent(0);
      });

      this.renderer.listenGlobal('window', 'scroll', () => {
        clearTimeout(this.onScrolling);
        this.onScrolling = setTimeout(() => {
          this.onWindowScrolling();
        }, 600);
      });

      this.carouselInt = setInterval(() => {
        // tslint:disable-next-line:no-unused-expression
        !this.pauseCarousel && this.carouselScrollOne(1);
      }, this.userData.interval);
    }
  }

  /* pause interval for specific time */
  private carouselIntervalEvent(ev: number): void {
    this.evtValue = ev;
    if (this.evtValue === 0) {
      clearTimeout(this.pauseInterval);
      this.pauseInterval = setTimeout(() => {
        // tslint:disable-next-line:no-unused-expression
        this.evtValue === 0 && (this.pauseCarousel = false);
      }, this.userData.interval);
    } else {
      this.pauseCarousel = true;
    }
  }

  /* animate the carousel items */
  private carouselAnimator(direction: number, start: number, end: number, speed: number, length: number): void {
    let val = length < 5 ? length : 5;
    val = val === 1 ? 3 : val;

    if (direction === 1) {
      for (let i = start - 1; i < end; i++) {
        val = val * 2;
        // tslint:disable-next-line:no-unused-expression
        this.carouselItems[i] && this.setStyle(this.carouselItems[i], 'transform', `translate3d(${val}px, 0, 0)`);
      }
    } else {
      for (let i = end - 1; i >= start - 1; i--) {
        val = val * 2;
        // tslint:disable-next-line:no-unused-expression
        this.carouselItems[i] && this.setStyle(this.carouselItems[i], 'transform', `translate3d(-${val}px, 0, 0)`);
      }
    }
    setTimeout(() => {
      for (let i = 0; i < this.items.length; i++) {
        this.setStyle(this.carouselItems[i], 'transform', 'translate3d(0, 0, 0)');
      }
    }, speed * .7);
  }

  /* control button for loop */
  private buttonControl(): void {
    if (!this.data.loop || (this.data.isFirst && this.data.isLast)) {
      this.setStyle(
        this.leftBtn,
        'display',
        this.data.isFirst ? 'none' : 'block'
      );
      this.setStyle(
        this.rightBtn,
        'display',
        this.data.isLast ? 'none' : 'block'
      );
    } else {
      this.setStyle(this.leftBtn, 'display', 'block');
      this.setStyle(this.rightBtn, 'display', 'block');
    }
  }
  private setStyle(el: any, prop: any, val: any): void {
    this.renderer.setElementStyle(el, prop, val);
  }
}