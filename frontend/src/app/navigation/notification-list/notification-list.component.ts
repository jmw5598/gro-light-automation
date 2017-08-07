import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

import { Notification } from '@app/shared/model/notification/notification.model';

@Component({
  selector: 'gro-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {

  @Input()
  notifications: Array<Notification>;

  @Output()
  onUpdateState: EventEmitter<Notification> = new EventEmitter<Notification>();

  @Output()
  onDeleteNotification: EventEmitter<Notification> = new EventEmitter<Notification>();

  constructor() {
    this.notifications = new Array<Notification>();
  }

  ngOnInit() {
  }

  updateState(notification: Notification) {
    this.onUpdateState.emit(notification);
  }

  delete(notification: Notification) {
    this.onDeleteNotification.emit(notification);
  }

}
