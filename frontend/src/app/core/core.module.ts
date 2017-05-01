import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { RPiComponentService } from './service/rpicomponent/rpicomponent.service';
import { TemperatureDataService } from './service/temperature-data/temperature-data.service';

import { AlertComponent } from './component/alert/alert.component';
import { PanelListGroupComponent } from './component/panel-list-group/panel-list-group.component';
import { RPiComponentFormComponent } from './component/rpicomponent-form/rpicomponent-form.component';
import { TableComponent } from './component/table/table.component';
import { UnauthorizedComponent } from './component/unauthorized/unauthorized.component';
import { PageableTableComponent } from './component/pageable-table/pageable-table.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    AlertComponent,
    PageableTableComponent,
    PanelListGroupComponent,
    RPiComponentFormComponent,
    UnauthorizedComponent,
    TableComponent
  ],
  declarations: [
    AlertComponent,
    PanelListGroupComponent,
    RPiComponentFormComponent,
    UnauthorizedComponent,
    TableComponent,
    PageableTableComponent
  ],
  providers: [
    RPiComponentService,
    TemperatureDataService
  ]
})
export class CoreModule { }
