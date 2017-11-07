import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../core';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private logger: LoggerService) { }

  ngOnInit() {
    this.logger.logDebug('Test logger');
  }
}
