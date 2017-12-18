import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';

import {
  UserService
} from '@app/user/services/user.service';
import {
  LoggerDecorator
} from '@app/core/decorators/logger.decorator';

@Component({
  selector: 'list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

@LoggerDecorator()
export class ListUserComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUser();
  }

}
