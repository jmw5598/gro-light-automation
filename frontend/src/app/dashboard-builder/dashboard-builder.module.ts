import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardModule } from '@app/dashboard/dashboard.module';
import { SharedModule } from '@app/shared/shared.module';

import { DASHBOARD_BUILDER_ROUTES } from '@app/dashboard/dashboard-builder/dashboard-builder.routing';
import { DashboardBuilderComponent } from './dashboard-builder.component';
import { DashboardBuilderToolbarComponent } from './dashboard-builder-toolbar/dashboard-builder-toolbar.component';
import { PanelComponent } from './components/panel/panel.component';
import { PanelMenuDirective } from './directive/panel-menu.directive';

@NgModule({
  imports: [
    DashboardModule,
    SharedModule,
    RouterModule.forChild(DASHBOARD_BUILDER_ROUTES)
  ],
  declarations: [
    DashboardBuilderComponent,
    DashboardBuilderToolbarComponent,
    PanelComponent,
    PanelMenuDirective
  ],
  exports: [
    DashboardBuilderComponent,
    DashboardBuilderToolbarComponent,
    PanelMenuDirective
  ]
})
export class DashboardBuilderModule {}
