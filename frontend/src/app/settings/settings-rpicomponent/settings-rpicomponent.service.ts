import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { CrudService } from '@app/core/service/crud.service';
import { HumiditySensorService } from '@app/core/service/humidity-sensor/humidity-sensor.service';
import { MoistureSensorService } from '@app/core/service/moisture-sensor/moisture-sensor.service';
import { ProximitySensorService } from '@app/core/service/proximity-sensor/proximity-sensor.service';
import { RelayService } from '@app/core/service/relay/relay.service';
import { TemperatureSensorService } from '@app/core/service/temperature-sensor/temperature-sensor.service';

import { ToasterService } from '@app/core/component/toaster/toaster.service';
import { ToastType } from '@app/core/component/toaster/toast-type.enum';

import { RPiComponent } from '@app/shared/model/rpicomponent/rpicomponent.model';
import { RPiComponentType } from '@app/shared/model/rpicomponent/rpicomponent-type.enum';

@Injectable()
export class SettingsRPiComponentService {

  public humiditySensors = new Subject<Array<RPiComponent>>();
  public moistureSensors = new Subject<Array<RPiComponent>>();
  public proximitySensors = new Subject<Array<RPiComponent>>();
  public relays = new Subject<Array<RPiComponent>>();
  public temperatureSensors = new Subject<Array<RPiComponent>>();

  public selectedComponent = new Subject<RPiComponent>();
  public componentFilter = new Subject<RPiComponentType>();

  constructor(
    private toasterService: ToasterService,
    private humiditySensorService: HumiditySensorService,
    private moistureSensorService: MoistureSensorService,
    private proximitySensorService: ProximitySensorService,
    private relayService: RelayService,
    private temperatureSensorService: TemperatureSensorService
  ) {
    this.initialize();
  }

  initialize() {
    this.load(RPiComponentType.HUMIDITY);
    this.load(RPiComponentType.MOISTURE);
    this.load(RPiComponentType.PROXIMITY);
    this.load(RPiComponentType.RELAY);
    this.load(RPiComponentType.TEMPERATURE);
  }

  load(type: RPiComponentType) {
    let service: CrudService<RPiComponent, number> = this.getServiceByType(type);
    service.findAll()
      .subscribe(
        data => this.setComponentsByType(data, type),
        error => this.toasterService.toast("Error loading " + type + " components", ToastType.WARNING)
      );
  }

  delete(id: number, type: RPiComponentType) {
    let service: CrudService<RPiComponent, number> = this.getServiceByType(type);
    service.delete(id)
      .subscribe(
        data => {this.load(type); console.log("settings component service"); console.log(data);},
        error => this.toasterService.toast("Error deleting id " + id, ToastType.WARNING)
      );
  }

  setSelectedComponent(component: RPiComponent) {
    this.selectedComponent.next(component);
  }

  setComponentFilter(filter: RPiComponentType) {
    this.componentFilter.next(filter);
  }

  private setComponentsByType(data: Array<RPiComponent>, type: RPiComponentType) {
    switch(type) {
      case RPiComponentType.HUMIDITY:
        this.humiditySensors.next(data);
        break;
      case RPiComponentType.MOISTURE:
        this.moistureSensors.next(data);
        break;
      case RPiComponentType.PROXIMITY:
        this.proximitySensors.next(data);
        break;
      case RPiComponentType.RELAY:
        this.relays.next(data);
        break;
      case RPiComponentType.TEMPERATURE:
        this.temperatureSensors.next(data);
        break;
      default:
        break;
    }
  }

  private getServiceByType(type: RPiComponentType) {
    let service = null;
    switch(type) {
      case RPiComponentType.HUMIDITY:
        service = this.humiditySensorService;
        break;
      case RPiComponentType.MOISTURE:
        service = this.moistureSensorService;
        break;
        case RPiComponentType.PROXIMITY:
          service = this.proximitySensorService;
          break;
        case RPiComponentType.RELAY:
          service = this.relayService;
          break;
        case RPiComponentType.TEMPERATURE:
          service = this.temperatureSensorService;
          break;
        default:
          break;
    }
    return service;
  }

}
