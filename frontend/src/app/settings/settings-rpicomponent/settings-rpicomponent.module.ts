import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { SettingsRPiComponentComponent } from './settings-rpicomponent.component';
import { RPiComponentAddComponent } from './rpicomponent-add/rpicomponent-add.component';
import { RPiComponentEditComponent } from './rpicomponent-edit/rpicomponent-edit.component';
import { RPiComponentFilterComponent } from './rpicomponent-table/rpicomponent-filter/rpicomponent-filter.component';
import { RPiComponentFormComponent } from './rpicomponent-form/rpicomponent-form.component';
import { RPiComponentListComponent } from './rpicomponent-table/rpicomponent-list/rpicomponent-list.component';
import { RPiComponentTableComponent } from './rpicomponent-table/rpicomponent-table.component';
import { RPiPinoutComponent } from './rpi-pinout/rpi-pinout.component';

import { SettingsRPiComponentService } from './settings-rpicomponent.service';

@NgModule({
  imports : [
    SharedModule
  ],
  exports: [
    SettingsRPiComponentComponent
  ],
  declarations: [
    RPiComponentAddComponent,
    RPiComponentEditComponent,
    RPiComponentFilterComponent,
    RPiComponentFormComponent,
    RPiComponentListComponent,
    RPiComponentTableComponent,
    RPiPinoutComponent,
    SettingsRPiComponentComponent
  ],
  providers: [
    SettingsRPiComponentService
  ]
})
export class SettingsRPiComponentModule {}
