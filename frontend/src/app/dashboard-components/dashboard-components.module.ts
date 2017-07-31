import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '@app/shared/shared.module';
import { UiSwitchModule } from 'angular2-ui-switch';

import { ColumnComponent } from '@app/dashboard-components/column/column.component';
import { FixedSidePanelComponent } from '@app/dashboard-components/panel/fixed-side-panel/fixed-side-panel.component';
import { GraphComponent } from '@app/dashboard-components/widgets/graph/graph/graph.component';
import { GraphTableComponent } from '@app/dashboard-components/widgets/graph/graph-table/graph-table.component';
import { GraphTableOptionsComponent } from '@app/dashboard-components/widgets/graph/graph-table/graph-table-options/graph-table-options.component';
import { GraphTableDataComponent } from '@app/dashboard-components/widgets/graph/graph-table/graph-table-data/graph-table-data.component';
import { PageableTableComponent } from '@app/dashboard-components/widgets/table/pageable-table/pageable-table.component';
import { PanelComponent } from '@app/dashboard-components/panel/panel.component';
import { ReadingsListComponent } from '@app/dashboard-components/widgets/sensor/readings-list/readings-list.component';
import { RelaysComponent } from '@app/dashboard-components/widgets/control/relays/relays.component';
import { RowComponent } from '@app/dashboard-components/row/row.component';
import { SimpleReadingComponent } from '@app/dashboard-components/widgets/sensor/simple-reading/simple-reading.component';
import { SimpleRelayComponent } from '@app/dashboard-components/widgets/control/simple-relay/simple-relay.component';
import { TableComponent } from '@app/dashboard-components/widgets/table/table/table.component';

@NgModule({
  imports: [
    ChartsModule,
    CommonModule,
    SharedModule,
    UiSwitchModule
  ],
  exports: [
    ColumnComponent,
    FixedSidePanelComponent,
    GraphComponent,
    GraphTableComponent,
    ColumnComponent,
    GraphTableOptionsComponent,
    GraphTableDataComponent,
    PageableTableComponent,
    PanelComponent,
    ReadingsListComponent,
    RelaysComponent,
    RowComponent,
    SimpleReadingComponent,
    SimpleRelayComponent,
    TableComponent,
  ],
  declarations: [
    ColumnComponent,
    FixedSidePanelComponent,
    GraphComponent,
    GraphTableComponent,
    GraphTableOptionsComponent,
    GraphTableDataComponent,
    PageableTableComponent,
    PanelComponent,
    ReadingsListComponent,
    RelaysComponent,
    RowComponent,
    SimpleReadingComponent,
    SimpleRelayComponent,
    TableComponent
  ]
})
export class DashboardComponentsModule { }
