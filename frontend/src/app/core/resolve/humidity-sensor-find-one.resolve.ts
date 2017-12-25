import { Injectable } from '@angular/core';
import { FindOneResolve } from '@app/core/resolve/find-one.resolve';
import { HumiditySensorService } from '@app/core/service/humidity-sensor/humidity-sensor.service';

@Injectable()
export class HumiditySensorFindOneResolve extends FindOneResolve<any> {

  constructor(protected service: HumiditySensorService) {
    super(service);
  }

}
