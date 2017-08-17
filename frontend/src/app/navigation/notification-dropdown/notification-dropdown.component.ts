import { Component, OnInit, OnDestroy } from '@angular/core';

import { Notification } from '@app/shared/model/notification/notification.model';
import { NotificationView } from '@app/shared/model/notification/notification-view.enum';
import { NotificationService } from '@app/core/service/notification/notification.service';
import { Page } from '@app/shared/model/paging/page.model';
import { SseService } from '@app/core/service/sse/sse.service';
import { ToasterService } from '@app/core/component/toaster/toaster.service';
import { ToastType } from '@app/core/component/toaster/toast-type.enum';

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
    private notificationService: NotificationService,
    private toasterService: ToasterService
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
        error => this.toasterService.toast('Error loading ' + state ? 'read' : 'unread' + ' notification.', ToastType.DANGER)
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
        error => this.toasterService.toast('Error updating notification.', ToastType.WARNING)
      )
  }

  onDeleteNotification(notification: Notification) {
    this.notificationService.delete(notification.id)
      .subscribe(
        data => {
          this.loadNotificationsByState(true);
          this.loadNotificationsByState(false);
        },
        error => this.toasterService.toast('Error deleting notification.', ToastType.DANGER)
      );
  }

  private handleNotificationEvent(object) {
    console.log("inside handle notification" + object);
    let notification: Notification =
        new Notification(object.id, new Date(object.timestamp), object.message, object.component, object.isRead);
    this.unread.content.unshift(notification);
    this.unread.totalElements++;
    this.toasterService.toast("New notification", ToastType.INFO);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
