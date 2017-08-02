import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';

import { NavigationComponent } from './navigation.component';
import { NotificationDropdownComponent } from './notification-dropdown/notification-dropdown.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [NavigationComponent],
  declarations: [NavigationComponent, NotificationDropdownComponent]
})
export class NavigationModule {}
