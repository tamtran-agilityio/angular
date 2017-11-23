import { Injectable } from '@angular/core';

import * as _ from 'lodash';

import { ModalComponent } from '../component/modal/modal.component';

@Injectable()
export class ModalService {
  private modals: Array<ModalComponent>;

  constructor() {
    this.modals = [];
  }

  registerModal(newModal: ModalComponent): void {
    const modal = this.findModal(newModal.modalId);

    // Delete existing to replace the modal
    if (modal) {
      this.modals.splice(_.indexOf(this.modals, modal));
    }

    this.modals.push(newModal);
  }

  openModal(modalId: string): void {
    const modal = this.findModal(modalId);

    if (modal) {
      modal.isOpen = true;
    }
  }

  closeModal(modalId: string, checkBlocking = false): void {
    const modal = this.findModal(modalId);

    if (modal) {
      if (checkBlocking && modal.blocking) {
        return;
      }

      modal.isOpen = false;
    }
  }

  private findModal(modalId: string): ModalComponent {
    for (const modal of this.modals) {
      if (modal.modalId === modalId) {
        return modal;
      }
    }
    return null;
  }
}
