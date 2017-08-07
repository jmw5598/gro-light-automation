import { Component, OnInit, OnDestroy } from '@angular/core';

import { Notification } from '@app/shared/model/notification/notification.model';
import { NotificationView } from '@app/shared/model/notification/notification-view.enum';
import { NotificationService } from '@app/core/service/notification/notification.service';
import { Page } from '@app/shared/model/paging/page.model';
import { SseService } from '@app/core/service/sse/sse.service';

@Component({
  selector: 'gro-notification-dropdown',
  templateUrl: './notification-dropdown.component.html',
  styleUrls: ['./notification-dropdown.component.css']
})
export class NotificationDropdownComponent implements OnInit, OnDestroy {

  private subscription;
  private read: Page<Notification>;
  private unread: Page<Notification>;
  private notificationView = NotificationView;

  private notificationViewSelected: NotificationView = NotificationView.UNREAD;

  constructor(
    private sseService: SseService,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.subscription = this.sseService
      .notificationAlert
        .subscribe(
          notification => this.handleNotificationEvent(notification)
        );
    this.loadNotificationsByState(true);  // load read notificaitons
    this.loadNotificationsByState(false); // load unread notifications
  }

  loadNotificationsByState(state: boolean) {
    this.notificationService.findAllByState(state)
      .subscribe(
        data => state ? this.read = data : this.unread = data,
        error => console.log("error getting notifications" + error)
      )
  }

  changeView(view: NotificationView) {
    this.notificationViewSelected = view;
  }

  onUpdateState(notification: Notification) {
    this.notificationService.updateNotificationState(notification.id, notification.isRead)
      .subscribe(
        data => {
          this.loadNotificationsByState(true);
          this.loadNotificationsByState(false);
        },
        error => console.log("error updating notification")
      )
  }

  onDeleteNotification(notification: Notification) {
    this.notificationService.delete(notification.id)
      .subscribe(
        data => {
          this.loadNotificationsByState(true);
          this.loadNotificationsByState(false);
        },
        error => console.log(error)
      );
  }

  private handleNotificationEvent(object) {
    let notification: Notification =
        new Notification(object.id, new Date(object.timestamp), object.message, object.component, object.isRead);
    this.unread.content.unshift(notification);
    this.unread.totalElements++;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
