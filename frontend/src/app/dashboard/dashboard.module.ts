import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { UiSwitchModule } from 'angular2-ui-switch';

import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';

import { DashboardComponent } from './dashboard.component';
import { DashboardBuilderComponent } from './dashboard-builder/dashboard-builder.component';
import { DashboardBuilderToolbarComponent } from './dashboard-builder/dashboard-builder-toolbar/dashboard-builder-toolbar.component';
import { FixedSidePanelComponent } from './component/panel/fixed-side-panel/fixed-side-panel.component';
import { GraphComponent } from './component/graph/graph.component';
import { GraphTableComponent } from './component/graph-table/graph-table.component';
import { GraphTableOptionsComponent } from './component/graph-table/graph-table-options/graph-table-options.component';
import { GraphTableDataComponent } from './component/graph-table/graph-table-data/graph-table-data.component';
import { PageableTableComponent } from './component/pageable-table/pageable-table.component';
import { PanelComponent } from './component/panel/panel.component';
import { ReadingsListComponent } from './component/readings-list/readings-list.component';
import { RelaysComponent } from './component/relays/relays.component';
import { TableComponent } from './component/table/table.component';
import { SimpleReadingComponent } from './component/simple-reading/simple-reading.component';
import { RowComponent } from './component/row/row.component';
import { SimpleRelayComponent } from './component/simple-relay/simple-relay.component';
import { ColumnComponent } from './component/column/column.component';

@NgModule({
  imports: [
    ChartsModule,
    SharedModule,
    UiSwitchModule
  ],
  exports: [DashboardComponent],
  declarations: [
    DashboardComponent,
    DashboardBuilderComponent,
    DashboardBuilderToolbarComponent,
    FixedSidePanelComponent,
    GraphComponent,
    GraphTableComponent,
    GraphTableOptionsComponent,
    GraphTableDataComponent,
    PageableTableComponent,
    PanelComponent,
    ReadingsListComponent,
    RelaysComponent,
    TableComponent,
    SimpleReadingComponent,
    RowComponent,
    SimpleRelayComponent,
    ColumnComponent,
  ]
})
export class DashboardModule {}
