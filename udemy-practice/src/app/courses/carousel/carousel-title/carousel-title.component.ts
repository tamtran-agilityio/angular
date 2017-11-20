import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'carousel-title',
  templateUrl: './carousel-title.component.html',
  styleUrls: ['./carousel-title.component.scss']
})
export class CarouselTitleComponent implements OnInit {
  @HostBinding('class') classes = 'item';
  constructor() { }

  ngOnInit() {
  }

}
