import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { LogDecorator } from '@app/core/decorators/log.decorator';

@LogDecorator('test')
@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
