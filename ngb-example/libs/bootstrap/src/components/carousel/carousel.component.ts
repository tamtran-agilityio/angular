import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit {
  constructor(config: NgbCarouselConfig) {
    config.interval = 1000;
    config.wrap = false;
    config.keyboard = true;
  }

  ngOnInit() {}
}
