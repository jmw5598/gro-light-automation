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

  public selectedComponent = new Subject<RPiComponent>();
  public componentFilter = new BehaviorSubject<RPiComponentType>(RPiComponentType.ALL);

  constructor(
    private toasterService: ToasterService,
  ) {}

  setSelectedComponent(component: RPiComponent) {
    this.selectedComponent.next(component);
  }

  setComponentFilter(filter: RPiComponentType) {
    this.componentFilter.next(filter);
  }

}
