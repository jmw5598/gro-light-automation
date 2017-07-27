import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { DashboardBuilderComponent } from './dashboard-builder.component';
import { DashboardBuilderToolbarComponent } from './dashboard-builder-toolbar/dashboard-builder-toolbar.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [DashboardBuilderComponent],
  declarations: [
    DashboardBuilderToolbarComponent
  ]
})
export class DashboardBuilderModule {}
