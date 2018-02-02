import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { FileUploadModule } from 'ng2-file-upload';

import { RPiAddComponent } from './rpi-add/rpi-add.component';
import { RPiComponent } from './rpi/rpi.component';
import { RPiComponentTableComponent } from './rpicomponent-table/rpicomponent-table.component';
import { RPiComponentFilterComponent } from './rpicomponent-table/rpicomponent-filter/rpicomponent-filter.component';
import { RPiDetailsComponent } from './rpi-details/rpi-details.component';
import { RPiFormComponent } from './rpi-form/rpi-form.component';
import { RPiListComponent } from './rpi-list/rpi-list.component';
import { RPiPinoutComponent } from './rpi-pinout/rpi-pinout.component';
import { SettingsRPiComponent } from './settings-rpi.component';
import { SettingsRPiComponentService } from './settings-rpicomponent.service';
import { SETTINGS_RPI_ROUTES } from './settings-rpi.routing';
import { RPiComponentFilterPipe } from './rpicomponent-table/rpicomponent-filter/rpicomponent-filter.pipe';
import { RPiUploadImageComponent } from './rpi-upload-image/rpi-upload-image.component';
import { RpicomponentFormComponent } from './rpicomponent-form/rpicomponent-form.component';

@NgModule({
  imports: [
    SharedModule,
    FileUploadModule,
    RouterModule.forChild(SETTINGS_RPI_ROUTES)
  ],
  exports: [
    SettingsRPiComponent
  ],
  declarations: [
    RPiAddComponent,
    RPiComponent,
    RPiComponentTableComponent,
    RPiComponentFilterComponent,
    RPiDetailsComponent,
    RPiFormComponent,
    RPiListComponent,
    RPiPinoutComponent,
    SettingsRPiComponent,
    RPiComponentFilterPipe,
    RPiUploadImageComponent,
    RpicomponentFormComponent
  ],
  providers: [
    SettingsRPiComponentService
  ]
})
export class SettingsRPiModule { }
