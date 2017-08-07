import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { CrudService } from '@app/core/service/crud.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Notification } from '@app/shared/model/notification/notification.model';
import { Page } from '@app/shared/model/paging/page.model';

@Injectable()
export class NotificationService extends CrudService<Notification, number> {

  constructor(http: Http) {
    super('http://192.168.1.7:8080/api/notification', http);
  }

  findAllByState(read: boolean): Observable<Page<Notification>> {
    const url: string = this.base + '/state?read=' + read;
    return this.http.get(url, this.options())
      .map(this.extractData)
      .catch(this.handleError);
  }

  updateNotificationState(id: number, read: boolean): Observable<Notification> {
    const url: string = this.base + '/' + id + '/state?read=' + read;
    return this.http.patch(url, this.options())
      .map(res => res.json())
      .catch(this.handleError);
  }

  protected extractData(res: Response) {
    let body = res.json() || '';
    let result = Array<Notification>();
    body.content.forEach(e => {
        result.push(new Notification(e.id, new Date(e.timestamp), e.message, e.component, e.isRead));
    })
    body.content = result;
    console.log("body: ");
    console.log(body);
    return body;
  }

}
