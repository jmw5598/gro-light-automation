import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard.component';
import { RelaysComponent } from './relays/relays.component';

@NgModule({
  imports: [
    ChartsModule,
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