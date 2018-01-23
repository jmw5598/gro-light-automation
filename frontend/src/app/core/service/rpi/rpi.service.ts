import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { CrudService } from '@app/core/service/crud.service';
import { RPi } from '@app/shared/model/rpi/rpi.model';

import { BASE_API_URL } from '@app/core/service/base-api-url.default';
import { REQUEST_OPTIONS_DEFAULT } from '@app/core/service/request-options.default';

@Injectable()
export class RPiService extends CrudService<RPi, number> {

  constructor(http: Http) {
    super(BASE_API_URL + "rpi", http,  REQUEST_OPTIONS_DEFAULT);
  }

}
