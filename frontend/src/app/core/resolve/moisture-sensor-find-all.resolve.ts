import { Injectable } from '@angular/core';
import { FindAllResolve } from '@app/core/resolve/find-all.resolve';
import { MoistureSensorService } from '@app/core/service/moisture-sensor/moisture-sensor.service';

@Injectable()
export class MoistureSensorFindAllResolve extends FindAllResolve<any> {

  constructor(protected service: MoistureSensorService) {
    super(service);
  }

}
