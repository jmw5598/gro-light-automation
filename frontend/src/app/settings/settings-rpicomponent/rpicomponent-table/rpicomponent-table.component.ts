import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { KeyToTitlePipe } from '@app/shared/pipe/key-to-title/key-to-title.pipe';
import { RPiComponent } from '@app/shared/model/rpicomponent/rpicomponent.model';
import { RPiComponentType } from '@app/shared/model/rpicomponent/rpicomponent-type.enum';

import { SettingsRPiComponentService } from '../settings-rpicomponent.service';
import { ToasterService } from '@app/core/component/toaster/toaster.service';
import { ToastType } from '@app/core/component/toaster/toast-type.enum';

@Component({
  selector: 'gro-rpicomponent-table',
  templateUrl: './rpicomponent-table.component.html',
  styleUrls: ['./rpicomponent-table.component.css']
})
export class RPiComponentTableComponent implements OnInit, OnDestroy {

  // Enum declaration for template
  rPiComponentType = RPiComponentType

  // Subscription data
  humidity: Array<RPiComponent>;
  moisture: Array<RPiComponent>;
  proximity: Array<RPiComponent>;
  relay: Array<RPiComponent>;
  temperature: Array<RPiComponent>;
  temperature_humidity: Array<RPiComponent>;

  filter: RPiComponentType;

  // Subscriptions
  humiditySubscription;
  moistureSubscription;
  proximitySubscription;
  relaySubscription;
  temperatureSubscription;
  temperature_humiditySubscription;

  filterSubscription;

  constructor(
    private settingsRPiComponentService: SettingsRPiComponentService,
    private toasterService: ToasterService
  ) {}

  ngOnInit() {

    this.humiditySubscription = this.settingsRPiComponentService.humiditySensors
      .subscribe(
        data => this.humidity = data,
        error => this.toasterService.toast("Error subscribing to humidity components", ToastType.WARNING)
      );

    this.moistureSubscription = this.settingsRPiComponentService.moistureSensors
      .subscribe(
        data => this.moisture = data,
        error => this.toasterService.toast("Error subscribing to moisture components", ToastType.WARNING)
      );

    this.proximitySubscription = this.settingsRPiComponentService.proximitySensors
      .subscribe(
        data => this.proximity = data,
        error => this.toasterService.toast("Error subscribing to proximity components", ToastType.WARNING)
      );

    this.relaySubscription = this.settingsRPiComponentService.relays
      .subscribe(
        data => this.relay = data,
        error => this.toasterService.toast("Error subscribing to relay components", ToastType.WARNING)
      );

    this.temperatureSubscription = this.settingsRPiComponentService.temperatureSensors
      .subscribe(
        data => this.humidity = data,
        error => this.toasterService.toast("Error subscribing to temperature components", ToastType.WARNING)
      );

    this.filterSubscription = this.settingsRPiComponentService.componentFilter
      .subscribe(
        data => this.filter = data,
        error => this.toasterService.toast("Error subscribing to component filter", ToastType.WARNING)
      );
  }

  // switch(filter: RPiComponentType) {
  //   this.settingsRPiComponentService.setComponentFilter(filter);
  // }

  hover(component: RPiComponent) {
    console.log(component);
  }

  ngOnDestroy() {
    if(this.humiditySubscription)
      this.humiditySubscription.unsubscribe();
    if(this.moistureSubscription)
      this.moistureSubscription.unsubscribe();
    if(this.proximitySubscription)
      this.proximitySubscription.unsubscribe();
    if(this.relaySubscription)
      this.relaySubscription.unsubscribe();
    if(this.temperatureSubscription)
      this.temperatureSubscription.unsubscribe();
    if(this.filterSubscription)
      this.filterSubscription.unsubscribe();
  }

}
