import {
  Component,
  OnInit,
  Input,
  HostListener
} from '@angular/core';

import * as _ from 'lodash';

import { AppConfigService } from '@app/core/services/app-config.service';
import { ModalService } from '@app/shared/services/modal.service';

@Component({
  selector: 'modal-box',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() modalId: string;
  @Input() modalTitle: string;
  @Input() footerTitle: string;
  @Input() blocking = false;
  isOpen = false;

  constructor(private modalService: ModalService,
              private appConfig: AppConfigService) {}

  ngOnInit() {
    this.modalService.registerModal(this);
  }

  closeModal(checkBlocking = false): void {
    this.modalService.closeModal(this.modalId, checkBlocking);
  }

  clickOutside(event) {
    if (event.keyCode === this.appConfig.KEY_CODE.KEYUP) {
      this.modalService.closeModal(this.modalId, true);
    }
  }
}
