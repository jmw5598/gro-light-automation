import { Injectable } from '@angular/core';
import { FindOneResolve } from './find-one.resolve';
import { RelayService } from '../service/relay/relay.service';

@Injectable()
export class RelayFindOneResolve extends FindOneResolve<any> {

  constructor(protected service: RelayService) {
    super(service);
  }

}
