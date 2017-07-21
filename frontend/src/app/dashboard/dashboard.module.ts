import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { DashboardBuilderComponent } from './dashboard-builder/dashboard-builder.component';
import { DashboardBuilderToolbarComponent } from './dashboard-builder/dashboard-builder-toolbar/dashboard-builder-toolbar.component';
import { DashboardComponent } from './dashboard.component';
import { FixedSidePanelComponent } from './component/panel/fixed-side-panel/fixed-side-panel.component';
import { GraphComponent } from './component/graph/graph.component';
import { GraphTableComponent } from './component/graph-table/graph-table.component';
import { PageableTableComponent } from './component/pageable-table/pageable-table.component';
import { PanelComponent } from './component/panel/panel.component';
import { ReadingsListComponent } from './component/readings-list/readings-list.component';
import { RelaysComponent } from './component/relays/relays.component';
import { TableComponent } from './component/table/table.component';

@NgModule({
  imports: [
    ChartsModule,
    CoreModule,
    SharedModule
  ],
  exports: [DashboardComponent],
  declarations: [
    DashboardBuilderComponent,
    DashboardBuilderToolbarComponent,
    DashboardComponent,
    FixedSidePanelComponent,
    GraphComponent,
    GraphTableComponent,
    PageableTableComponent,
    PanelComponent,
    ReadingsListComponent,
    RelaysComponent,
    TableComponent
  ]
})
export class DashboardModule {}
