import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PageLoading } from '@app/shared/component/page-loader/page-loading';
import { RPiPin } from '@app/shared/model/rpipin/rpi-pin.model';
import { RPiPinService } from '@app/core/service/rpipin/rpi-pin.service';
import { ToasterService } from '@app/core/component/toaster/toaster.service';
import { ToastType } from '@app/core/component/toaster/toast-type.enum';

import { SettingsRPiComponentService } from '@app/settings/settings-rpicomponent/settings-rpicomponent.service';


@Component({
  selector: 'gro-settings-rpicomponent',
  templateUrl: './settings-rpicomponent.component.html',
  styleUrls: ['./settings-rpicomponent.component.css']
})
export class SettingsRPiComponentComponent extends PageLoading implements OnInit {

  pins: Array<RPiPin>;


  constructor(
    private rPiPinService: RPiPinService,
    private toasterService:  ToasterService,
    private settingsRPiComponentService: SettingsRPiComponentService
  ) {
    super(true);
  }

  ngOnInit() {
    this.loadPins();
    this.ready();
  }


  private loadPins() {
    this.rPiPinService
      .findAll()
        .subscribe(
          data => this.pins = data,
          error => this.toasterService.toast("Error retrieving pins", ToastType.WARNING)
        )
  }

}
