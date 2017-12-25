import { Injectable } from '@angular/core';
import { FindAllResolve } from '@app/core/resolve/find-all.resolve';
import { TemperatureSensorService } from '@app/core/service/temperature-sensor/temperature-sensor.service';

@Injectable()
export class TemperatureSensorFindAllResolve extends FindAllResolve<any> {

  constructor(protected service: TemperatureSensorService) {
    super(service);
  }

}
