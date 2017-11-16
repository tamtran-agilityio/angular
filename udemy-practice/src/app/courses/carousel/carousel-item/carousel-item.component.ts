import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss']
})
export class CarouselItemComponent implements OnInit {
  @HostBinding('class') classes = 'item';
  constructor() { }

  ngOnInit() {
  }

}
