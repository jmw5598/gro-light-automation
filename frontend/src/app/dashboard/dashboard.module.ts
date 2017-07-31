import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';
import { DashboardComponentsModule } from '@app/dashboard-components/dashboard-components.module';

import { DASHBOARD_ROUTES } from './dashboard.routing';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    DashboardComponentsModule,
    SharedModule,
    RouterModule.forChild(DASHBOARD_ROUTES)
  ],
  exports: [
    DashboardComponent
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule {}
