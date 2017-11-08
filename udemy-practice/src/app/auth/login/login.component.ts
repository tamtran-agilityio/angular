import { Component, OnInit, OnChanges } from '@angular/core';
import { ModalService } from '../../shared';

@Component({
  selector: 'login-box',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnChanges {
  constructor(public modalService: ModalService) { }
  loginTitle: String = 'Login';
  modalId: String = 'Login';
  ngOnInit() {
  }

  ngOnChanges() {
  }

}
