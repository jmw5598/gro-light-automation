import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard.component';
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
    CoreModule,
    SharedModule
  ],
  exports: [DashboardComponent],
  declarations: [
    DashboardComponent,
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
