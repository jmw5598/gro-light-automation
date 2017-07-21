import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { HumidityDataService } from './service/humidity-data/humidity-data.service';
import { RelayService } from './service/relay/relay.service';
import { RPiComponentService } from './service/rpicomponent/rpicomponent.service';
import { TemperatureDataService } from './service/temperature-data/temperature-data.service';

import { AlertComponent } from './component/alert/alert.component';
import { PanelListGroupComponent } from './component/panel-list-group/panel-list-group.component';
import { RPiComponentFormComponent } from './component/rpicomponent-form/rpicomponent-form.component';
import { UnauthorizedComponent } from './component/unauthorized/unauthorized.component';
import { KeyToTitlePipe } from './pipe/key-to-title/key-to-title.pipe';
import { KeyExtractPipe } from './pipe/key-extract/key-extract.pipe';
import { CelsiusToFahrenheitPipe } from './pipe/celsius-to-fahrenheit/celsius-to-fahrenheit.pipe';
import { SimpleLoaderComponent } from './component/simple-loader/simple-loader.component';
import { PageLoaderComponent } from './component/page-loader/page-loader.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    AlertComponent,
    PanelListGroupComponent,
    RPiComponentFormComponent,
    UnauthorizedComponent,
    CelsiusToFahrenheitPipe,
    SimpleLoaderComponent,
    PageLoaderComponent,
    KeyToTitlePipe,
    KeyExtractPipe
  ],
  declarations: [
    AlertComponent,
    PanelListGroupComponent,
    RPiComponentFormComponent,
    UnauthorizedComponent,
    KeyToTitlePipe,
    KeyExtractPipe,
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
