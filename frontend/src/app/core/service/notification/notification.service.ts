import { Injectable, OnDestroy } from '@angular/core';
import { Http, Response } from '@angular/http';

import { AuthenticationService } from '@app/authentication/authentication.service';
import { CrudService } from '@app/core/service/crud.service';
import { BASE_API_URL } from '@app/core/service/base-api-url.default';
import { REQUEST_OPTIONS_DEFAULT } from '@app/core/service/request-options.default';
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

  private read = new Array<Notification>();
  private unread = new Array<Notification>();
  public readSubscription = new BehaviorSubject<Array<Notification>>(this.read);
  public unreadSubscription = new BehaviorSubject<Array<Notification>>(this.unread);

  private readPage: Page<Notification>;
  private unreadPage: Page<Notification>;
  public currentReadPage = new BehaviorSubject<Page<Notification>>(this.readPage);
  public currentUnreadPage = new BehaviorSubject<Page<Notification>>(this.unreadPage);

  private notificationEvents;

  constructor(
    public http: Http,
    private sseService: SseService,
    private toasterService: ToasterService,
    private authenticationService: AuthenticationService
  ) {
    super(BASE_API_URL + 'notification', http, REQUEST_OPTIONS_DEFAULT );
    if(this.authenticationService.isLoggedIn()){
      this.retrieveNotifications(0, true);
      this.retrieveNotifications(0, false);
    }
    this.notificationEvents = this.sseService.notificationAlert
      .subscribe(
        data => {
          this.unread.unshift(<Notification> data);
          this.unreadPage.totalElements += 1;
          this.toasterService.toast("You received a new notification", ToastType.INFO);
        },
        error => this.toasterService.toast("Error receiving new notification", ToastType.WARNING)
      );
  }

  findPageByState(page:number, read: boolean): Observable<Page<Notification>> {
    console.log("inside findPageByState with page = " + page);
    const url: string = this.base + '/state?read=' + read + '&page=' + page;
    return this.http.get(url, this.options)
      .map(this.extractPageData)
      .catch(this.handleError);
  }

  updateNotificationState(id: number, read: boolean): Observable<Notification> {
    const url: string = this.base + '/' + id + '/state?read=' + read;
    return this.http.patch(url, null, this.options)
      .map(res => res.json())
      .catch(this.handleError)
      .finally(() => {
        this.retrieveNotifications(0, true);
        this.retrieveNotifications(0, false);
      });
  }

  loadNextPage(): void {
    if(!this.unreadPage.last) {
      this.retrieveNotifications(this.unreadPage.number + 1, false);
    }
  }

  deleteNotification(notification: Notification): Observable<Notification> {
    return this.delete(notification.id)
      .finally(() => {
        const index = notification.isRead ? this.read.indexOf(notification) : this.unread.indexOf(notification);
        if(notification.isRead) {
          this.read.splice(index, 1);
          this.readPage.totalElements -= 1;
        } else {
          this.unread.splice(index,1);
          this.unreadPage.totalElements -= 1;
        }
        this.toasterService.toast("Successfully deleted notifications", ToastType.SUCCESS);
      });

  }

  private retrieveNotifications(page:number, read: boolean) {
    this.findPageByState(page, read)
      .subscribe(
        data => {
          if(read) {
            this.readPage = data;
            this.currentReadPage.next(this.readPage);
            data.content.forEach((e) => this.read.push(e));
          } else {
            this.unreadPage = data;
            this.currentUnreadPage.next(this.unreadPage);
            data.content.forEach((e) => this.unread.push(e));
          }
        },
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
    this.notificationEvents.unsubscribe();
  }

}
