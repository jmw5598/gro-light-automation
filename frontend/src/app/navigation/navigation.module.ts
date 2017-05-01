import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { NavigationComponent } from './navigation.component';

@NgModule({
  imports: [
    CoreModule,
    SharedModule
  ],
  exports: [NavigationComponent],
  declarations: [NavigationComponent]
})
export class NavigationModule {}