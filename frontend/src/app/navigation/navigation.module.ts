import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';

import { NavigationComponent } from './navigation.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [NavigationComponent],
  declarations: [NavigationComponent]
})
export class NavigationModule {}
