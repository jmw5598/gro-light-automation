import { Injectable, OnDestroy } from '@angular/core';
import { Http, Response } from '@angular/http';

import { CrudService } from '@app/core/service/crud.service';
import { SseService } from '@app/core/service/sse/sse.service';
import { ToasterService } from '@app/core/component/toaster/toaster.service';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/catch';

import { Notification } from '@app/shared/model/notification/notification.model';
import { Page } from '@app/shared/model/paging/page.model';
import { ToastType } from '@app/core/component/toaster/toast-type.enum';

@Injectable()
export class NotificationService extends CrudService<Notification, number> implements OnDestroy {

  public read = new BehaviorSubject<Page<Notification>>(null);
  public unread = new BehaviorSubject<Page<Notification>>(null);
  private notifications;
  constructor(
    public http: Http,
    private sseService: SseService,
    private toasterService: ToasterService
  ) {
    super('http://192.168.1.7:8080/api/notification', http);
    this.retrieveNotifications(true);
    this.retrieveNotifications(false);
    this.notifications = this.sseService.notificationAlert
      .subscribe(
        data => {
          this.retrieveNotifications(false); //maybe change this to add in new notifications to page content?
          this.toasterService.toast("You received a new notification", ToastType.INFO);
        },
        error => this.toasterService.toast("Error receiving new notification", ToastType.WARNING)
      );
  }

  findAllByState(read: boolean): Observable<Page<Notification>> {
    const url: string = this.base + '/state?read=' + read;
    return this.http.get(url, this.options())
      .map(this.extractPageData)
      .catch(this.handleError);
  }

  updateNotificationState(id: number, read: boolean): Observable<Notification> {
    const url: string = this.base + '/' + id + '/state?read=' + read;
    return this.http.patch(url, null, this.options())
      .map(res => res.json())
      .catch(this.handleError)
      .finally(() => {
        this.retrieveNotifications(true);
        this.retrieveNotifications(false);
      });
  }

  deleteNotification(notification: Notification): Observable<Notification> {
    return this.delete(notification.id)
      .finally(() => notification.isRead ? this.retrieveNotifications(true) : this.retrieveNotifications(false));

  }

  private retrieveNotifications(read: boolean) {
    this.findAllByState(read)
      .subscribe(
        data => read ? this.read.next(data) : this.unread.next(data),
        error => this.toasterService.toast('Error loading ' + read ? 'read' : 'unread' + ' notification.', ToastType.DANGER)
      );
  }

  protected extractPageData(res: Response) {
    let body = res.json() || '';
    let result = Array<Notification>();
    body.content.forEach(e => {
        result.push(new Notification(e.id, new Date(e.timestamp), e.message, e.component, e.read));
    })
    body.content = result;
    return body;
  }

  ngOnDestroy() {
    this.notifications.unsubscribe();
  }

}
