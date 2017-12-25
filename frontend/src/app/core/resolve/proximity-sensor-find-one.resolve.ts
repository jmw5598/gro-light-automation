import { Injectable } from '@angular/core';
import { FindOneResolve } from '@app/core/resolve/find-one.resolve';
import { ProximitySensorService } from '@app/core/service/proximity-sensor/proximity-sensor.service';

@Injectable()
export class ProximitySensorFindOneResolve extends FindOneResolve<any> {

  constructor(protected service: ProximitySensorService) {
    super(service);
  }

}
