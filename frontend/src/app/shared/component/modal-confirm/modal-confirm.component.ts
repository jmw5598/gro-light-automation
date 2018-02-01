import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalConfirm } from './modal-confirm.model';

@Component({
  selector: 'gro-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.css']
})
export class ModalConfirmComponent implements OnInit {

  @Input()
  modalConfirm: ModalConfirm;

  @Output()
  onConfirm: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
    this.modalConfirm = new ModalConfirm("Are you sure?", false, "Confirmation");
  }

  ngOnInit() {
  }

  confirm(confirm: boolean) {
    this.onConfirm.emit(confirm)
    this.modalConfirm.setShown(false);
  }

}
