import { FindAllResolve } from './find-all.resolve';
import { RelayService } from '../service/relay/relay.service';

export class RelayFindAllResolve extends FindAllResolve<any> {

  constructor(protected service: RelayService) {
    super(service);
  }

}
