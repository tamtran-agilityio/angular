import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-inline',
  templateUrl: './banner-inline.component.html',
  styleUrls: ['./banner-inline.component.css']
})
export class BannerInlineComponent implements OnInit {
  title: String = 'banner-inline works!';
  constructor() { }

  ngOnInit() {
  }

  setMessage(newMessage: string) {
    this.title = newMessage;
  }
}
