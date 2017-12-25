import { Injectable } from '@angular/core';
import { FindAllResolve } from '@app/core/resolve/find-all.resolve';
import { HumiditySensorService } from '@app/core/service/humidity-sensor/humidity-sensor.service';

@Injectable()
export class HumiditySensorFindAllResolve extends FindAllResolve<any> {

  constructor(protected service: HumiditySensorService) {
    super(service);
  }

}
