import { Component, OnInit, OnChanges } from '@angular/core';
import { ModalService } from '../../shared';
import { UserService } from '../service/user.service';

@Component({
  selector: 'login-box',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnChanges {
  loginTitle: String = 'Login';
  modalId: String = 'Login';

  constructor(private modalService: ModalService,
              private userService: UserService) {}

  ngOnInit() {
  }

  ngOnChanges() {
    this.userService.getUserBy('trantamtk08b@gmail.com', 'test').subscribe(res => {
      console.log('res', res);
    });
  }

}
