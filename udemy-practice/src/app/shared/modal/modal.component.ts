import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ModalService } from './modal.service';
@Component({
  selector: 'modal-box',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() modalId: string;
  @Input() modalTitle: string;
  @Input() blocking = false;
  isOpen = false;

  @HostListener('keyup') onMouseEnter(event) {
    this.keyup(event);
  }

  constructor(private modalService: ModalService) {
  }

  ngOnInit() {
    this.modalService.registerModal(this);
  }

  closeModal(checkBlocking = false): void {
    this.modalService.closeModal(this.modalId, checkBlocking);
  }

  private keyup(event: KeyboardEvent): void {
    if (event.keyCode === 27) {
      this.modalService.closeModal(this.modalId, true);
    }
  }

}
