import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard.component';
import { RelaysComponent } from './relays/relays.component';

@NgModule({
  imports: [
    CoreModule,
    SharedModule
  ],
  exports: [DashboardComponent],
  declarations: [
    DashboardComponent,
    RelaysComponent
  ]
})
export class DashboardModule {}
