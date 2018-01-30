import { Component, OnInit } from '@angular/core';

import { RPiService } from '@app/core/service/rpi/rpi.service';

import { RPi } from '@app/shared/model/rpi/rpi.model';

@Component({
  selector: 'gro-settings-rpi',
  templateUrl: './settings-rpi.component.html',
  styleUrls: ['./settings-rpi.component.css']
})
export class SettingsRPiComponent implements OnInit {

  rpis: Array<RPi>;

  constructor(
    private rpiService: RPiService
  ) {}

  ngOnInit() {
    this.loadAllRPi();
  }

  delete(id: number) {
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
