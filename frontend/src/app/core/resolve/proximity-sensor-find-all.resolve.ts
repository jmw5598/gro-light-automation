import { Injectable } from '@angular/core';
import { FindAllResolve } from '@app/core/resolve/find-all.resolve';
import { ProximitySensorService } from '@app/core/service/proximity-sensor/proximity-sensor.service';

@Injectable()
export class ProximitySensorFindAllResolve extends FindAllResolve<any> {

  constructor(protected service: ProximitySensorService) {
    super(service);
  }

}
