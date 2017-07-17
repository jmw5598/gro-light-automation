import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard.component';
import { RelaysComponent } from './relays/relays.component';
import { ReadingsListComponent } from './readings-list/readings-list.component';
import { DashboardBuilderComponent } from './dashboard-builder/dashboard-builder.component';
import { DashboardBuilderToolbarComponent } from './dashboard-builder/dashboard-builder-toolbar/dashboard-builder-toolbar.component';

@NgModule({
  imports: [
    CoreModule,
    SharedModule
  ],
  exports: [DashboardComponent],
  declarations: [
    DashboardComponent,
    RelaysComponent,
    ReadingsListComponent,
    DashboardBuilderComponent,
    DashboardBuilderToolbarComponent
  ]
})
export class DashboardModule {}
