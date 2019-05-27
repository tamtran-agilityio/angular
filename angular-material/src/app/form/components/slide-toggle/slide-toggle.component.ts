import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss']
})
export class SlideToggleComponent implements OnInit {
  color = 'accent';
  checked = true;
  disabled = false;
  constructor() { }

  ngOnInit() {
  }

}
