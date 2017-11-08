import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  modalTitle: String = 'Login';
  modalId: String = 'Login';
  constructor(public modalService: ModalService) { }

  ngOnInit() {
  }

}
