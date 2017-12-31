import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PageLoading } from '@app/shared/component/page-loader/page-loading';
import { RPiComponent } from '@app/shared/model/rpicomponent/rpicomponent.model';
import { RPiComponentService } from '@app/core/service/rpicomponent/rpicomponent.service';
import { RPiPin } from '@app/shared/model/rpipin/rpi-pin.model';
import { RPiPinService } from '@app/core/service/rpipin/rpi-pin.service';
import { ToasterService } from '@app/core/component/toaster/toaster.service';
import { ToastType } from '@app/core/component/toaster/toast-type.enum';

@Component({
  selector: 'gro-settings-rpicomponent',
  templateUrl: './settings-rpicomponent.component.html',
  styleUrls: ['./settings-rpicomponent.component.css']
})
export class SettingsRPiComponentComponent extends PageLoading implements OnInit {

  pins: Array<RPiPin>;


  constructor(
    private rPiComponentService: RPiComponentService,
    private rPiPinService: RPiPinService,
    private toasterService:  ToasterService,
    private route: ActivatedRoute
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
