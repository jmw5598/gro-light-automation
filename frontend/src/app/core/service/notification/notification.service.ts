import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CrudService } from '@app/core/service/crud.service';

import { Notification } from '@app/shared/model/notification/notification.model';

@Injectable()
export class NotificationService extends CrudService<Notification, number> {

  constructor(http: Http) {
    super('http://192.168.1.7:8080/api/component', http);
  }

}
