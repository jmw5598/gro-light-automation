import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';

import { NavigationComponent } from './navigation.component';
import { NotificationDropdownComponent } from './notification-dropdown/notification-dropdown.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [NavigationComponent],
  declarations: [NavigationComponent, NotificationDropdownComponent, NotificationComponent]
})
export class NavigationModule {}
