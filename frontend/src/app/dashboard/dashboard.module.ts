import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard.component';
import { RelaysComponent } from './relays/relays.component';
import { ReadingsListComponent } from './readings-list/readings-list.component';

@NgModule({
  imports: [
    CoreModule,
    SharedModule
  ],
  exports: [DashboardComponent],
  declarations: [
    DashboardComponent,
    RelaysComponent,
    ReadingsListComponent
  ]
})
export class DashboardModule {}
