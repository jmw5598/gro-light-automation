import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@app/shared/shared.module';

import { DASHBOARD_BUILDER_ROUTES } from '@app/dashboard/dashboard-builder/dashboard-builder.routing';
import { DashboardBuilderComponent } from './dashboard-builder.component';
import { DashboardBuilderToolbarComponent } from './dashboard-builder-toolbar/dashboard-builder-toolbar.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(DASHBOARD_BUILDER_ROUTES)
  ],
  declarations: [
    DashboardBuilderComponent,
    DashboardBuilderToolbarComponent
  ],
  exports: [
    DashboardBuilderComponent,
    DashboardBuilderToolbarComponent
  ]
})
export class DashboardBuilderModule {}
