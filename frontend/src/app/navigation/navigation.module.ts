import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';

import { NavigationComponent } from './navigation.component';
import { NotificationDropdownComponent } from './notification-dropdown/notification-dropdown.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { NotificationInfiniteScrollDirective } from './notification-list/notification-infinite-scroll.directive';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [NavigationComponent],
  declarations: [NavigationComponent, NotificationDropdownComponent, NotificationComponent, NotificationListComponent, NotificationInfiniteScrollDirective]
})
export class NavigationModule {}
