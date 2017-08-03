import { Component, OnInit, OnDestroy } from '@angular/core';

import { Notification } from '@app/shared/model/notification/notification.model';
import { SseService } from '@app/core/service/sse/sse.service';

@Component({
  selector: 'gro-notification-dropdown',
  templateUrl: './notification-dropdown.component.html',
  styleUrls: ['./notification-dropdown.component.css']
})
export class NotificationDropdownComponent implements OnInit, OnDestroy {

  private subscription;
  private notifications: Array<Notification>;

  constructor(private sseService: SseService) {
    this.notifications = new Array<Notification>();
  }

  ngOnInit() {
    this.subscription = this.sseService
      .notificationAlert
        .subscribe(
          notification => this.handleNotification(notification)
        );
  }

  onDeleteNotification(notification: Notification) {
    let index = this.notifications.indexOf(notification);
    if(index > -1)
      this.notifications.splice(index, 1);
  }

  private handleNotification(object) {
    let notification: Notification =
        new Notification(object.id, new Date(object.timestamp), object.message, object.component);
    this.notifications.unshift(notification);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
