import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../core';
import { UserService } from '../auth/service/user.service';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private logger: LoggerService,
              private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserBy('trantamtk08b@gmail.com', 'test').subscribe(res => {
      console.log('res', res);
    });
    this.logger.logDebug('Test logger');
  }
}
