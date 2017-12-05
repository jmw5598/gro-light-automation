import { Component, OnInit } from '@angular/core';

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

  components: Array<RPiComponent>;
  pins: Array<RPiPin>;
  selected: RPiComponent;

  constructor(
    private rPiComponentService: RPiComponentService,
    private rPiPinService: RPiPinService,
    private toasterService: ToasterService
  ) {
    super(true);
  }

  ngOnInit() {
    this.loadComponents();
  }

  onComponentDelete(id: number) {
    console.log("deleting component: " + id);
    this.rPiComponentService
      .delete(id)
        .subscribe(
          data => this.loadComponents(),
          error => console.log(error)
        );
  }

  onTableRowHover(component: RPiComponent) {
    this.selected = component;
  }

  private loadComponents() {
    this.rPiComponentService
      .findAll()
        .subscribe(
          data => { this.components = data; this.loadPins(); },
          error => this.toasterService.toast("Error retrieving components", ToastType.WARNING)
        );
  }

  private loadPins() {
    this.rPiPinService
      .findAll()
        .subscribe(
          data => { this.pins = data; this.ready(); console.log(this.pins); },
          error => this.toasterService.toast("Error retrieving pins", ToastType.WARNING)
        )
  }

}
