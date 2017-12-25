import { Injectable } from '@angular/core';
import { FindOneResolve } from '@app/core/resolve/find-one.resolve';
import { MoistureSensorService } from '@app/core/service/moisture-sensor/moisture-sensor.service';

@Injectable()
export class MoistureSensorFindOneResolve extends FindOneResolve<any> {

  constructor(protected service: MoistureSensorService) {
    super(service);
  }

}
