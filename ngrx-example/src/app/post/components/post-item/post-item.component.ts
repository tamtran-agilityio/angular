import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
