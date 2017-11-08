import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../shared';

@Component({
  selector: 'login-box',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(public modalService: ModalService) { }

  ngOnInit() {
  }

}
