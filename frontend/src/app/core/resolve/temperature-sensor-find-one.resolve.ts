import { Injectable } from '@angular/core';
import { FindOneResolve } from '@app/core/resolve/find-one.resolve';
import { TemperatureSensorService } from '@app/core/service/temperature-sensor/temperature-sensor.service';

@Injectable()
export class TemperatureSensorFindOneResolve extends FindOneResolve<any> {

  constructor(protected service: TemperatureSensorService) {
    super(service);
  }

}
