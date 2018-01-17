import { Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


export class NgbModalContent {
  @Input() name;
  constructor(
    private activeModal: NgbActiveModal
  ) {}
}
