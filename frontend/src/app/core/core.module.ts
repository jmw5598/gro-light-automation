import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ChartsModule } from 'ng2-charts';

import { HumidityDataService } from './service/humidity-data/humidity-data.service';
import { RelayService } from './service/relay/relay.service';
import { RPiComponentService } from './service/rpicomponent/rpicomponent.service';
import { TemperatureDataService } from './service/temperature-data/temperature-data.service';

import { AlertComponent } from './component/alert/alert.component';
import { PanelListGroupComponent } from './component/panel-list-group/panel-list-group.component';
import { RPiComponentFormComponent } from './component/rpicomponent-form/rpicomponent-form.component';
import { TableComponent } from './component/table/table.component';
import { UnauthorizedComponent } from './component/unauthorized/unauthorized.component';
import { PageableTableComponent } from './component/pageable-table/pageable-table.component';
import { KeyToTitlePipe } from './pipe/key-to-title/key-to-title.pipe';
import { KeyExtractPipe } from './pipe/key-extract/key-extract.pipe';
import { GraphComponent } from './component/graph/graph.component';
import { GraphTableComponent } from './component/graph-table/graph-table.component';
import { GraphTableOptionsComponent } from './component/graph-table/graph-table-options/graph-table-options.component';
import { GraphTableDataComponent } from './component/graph-table/graph-table-data/graph-table-data.component';
import { CelsiusToFahrenheitPipe } from './pipe/celsius-to-fahrenheit/celsius-to-fahrenheit.pipe';
import { SimpleLoaderComponent } from './component/simple-loader/simple-loader.component';
import { PageLoaderComponent } from './component/page-loader/page-loader.component';

@NgModule({
  imports: [
    ChartsModule,
    SharedModule
  ],
  exports: [
    AlertComponent,
    PageableTableComponent,
    PanelListGroupComponent,
    RPiComponentFormComponent,
    UnauthorizedComponent,
    TableComponent,
    GraphComponent,
    GraphTableComponent,
    CelsiusToFahrenheitPipe,
    SimpleLoaderComponent,
    PageLoaderComponent
  ],
  declarations: [
    AlertComponent,
    PanelListGroupComponent,
    RPiComponentFormComponent,
    UnauthorizedComponent,
    TableComponent,
    PageableTableComponent,
    KeyToTitlePipe,
    KeyExtractPipe,
    GraphComponent,
    GraphTableComponent,
    GraphTableOptionsComponent,
    GraphTableDataComponent,
    CelsiusToFahrenheitPipe,
    SimpleLoaderComponent,
    PageLoaderComponent
  ],
  providers: [
    HumidityDataService,
    RelayService,
    RPiComponentService,
    TemperatureDataService
  ]
})
export class CoreModule { }
