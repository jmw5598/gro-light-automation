import { Component, OnInit } from '@angular/core';

import { RPiService } from '@app/core/service/rpi/rpi.service';

import { RPi } from '@app/shared/model/rpi/rpi.model';
import { ModalConfirm } from '@app/shared/component/modal-confirm/modal-confirm.model';

@Component({
  selector: 'gro-settings-rpi',
  templateUrl: './settings-rpi.component.html',
  styleUrls: ['./settings-rpi.component.css']
})
export class SettingsRPiComponent implements OnInit {

  rpis: Array<RPi>;
  modalConfirm: ModalConfirm;
  deletionId: number;

  constructor(
    private rpiService: RPiService
  ) {}

  ngOnInit() {
    this.loadAllRPi();
    this.modalConfirm = new ModalConfirm("Are you sure you want to delete this node?", false);
  }

  onDelete(id: number) {
    this.deletionId = id;
    this.modalConfirm.toggle();
  }

  onConfirm(confirm: boolean) {
    if(confirm) {
      this.deleteById(this.deletionId);
      this.deletionId = null;
    } else {
      this.deletionId = null;
    }
  }

  private deleteById(id: number) {
    this.rpiService.delete(id)
      .subscribe(
        data => this.loadAllRPi(),
        error => console.log("error deleting rpi")
      );
  }

  private loadAllRPi() {
    this.rpiService.findAll()
      .subscribe(
        data => this.rpis = data,
        error => console.log("error getting raspberry pies")
      );
  }

}
