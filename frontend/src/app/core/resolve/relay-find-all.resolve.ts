import { Injectable } from '@angular/core';
import { FindAllResolve } from './find-all.resolve';
import { RelayService } from '../service/relay/relay.service';

@Injectable()
export class RelayFindAllResolve extends FindAllResolve<any> {

  constructor(protected service: RelayService) {
    super(service);
  }

}
