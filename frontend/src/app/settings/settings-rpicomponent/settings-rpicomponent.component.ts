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

  components: Array<RPiComponent>;
  pins: Array<RPiPin>;
  selected: RPiComponent;

  //temp
  humidity: Array<any>;
  moisture: Array<any>;
  proximity: Array<any>;
  relay: Array<any>;
  temperature: Array<any>;



  constructor(
    private rPiComponentService: RPiComponentService,
    private rPiPinService: RPiPinService,
    private toasterService:  ToasterService,
    private route: ActivatedRoute
  ) {
    super(true);
  }

  ngOnInit() {
    // this.loadComponents();
    this.humidity = this.route.snapshot.data['humidity'];
    this.moisture = this.route.snapshot.data['moisture'];
    this.proximity = this.route.snapshot.data['proximity'];
    this.relay = this.route.snapshot.data['relay'];
    this.temperature = this.route.snapshot.data['temperature'];
    this.loadPins();
    this.ready();
  }

  onComponentDelete(id: number) {
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
          data => this.pins = data,
          error => this.toasterService.toast("Error retrieving pins", ToastType.WARNING)
        )
  }

}
