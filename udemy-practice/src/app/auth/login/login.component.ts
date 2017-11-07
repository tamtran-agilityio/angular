import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../shared';

@Component({
  selector: 'login-model',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  modalTitle: String = 'Login';
  constructor(public modalService: ModalService) { }

  ngOnInit() {
  }

}
