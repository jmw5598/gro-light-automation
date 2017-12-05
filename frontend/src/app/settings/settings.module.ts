import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiSwitchModule } from 'angular2-ui-switch';

import { SETTINGS_ROUTES } from '@app/settings/settings.routing';

import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';

import { RPiComponentAddComponent } from './settings-rpicomponent/rpicomponent-add/rpicomponent-add.component';
import { RPiComponentEditComponent } from './settings-rpicomponent/rpicomponent-edit/rpicomponent-edit.component';
import { RPiComponentsComponent } from './settings-rpicomponent/rpicomponents/rpicomponents.component';
import { RPiComponentFormComponent } from './settings-rpicomponent/rpicomponent-form/rpicomponent-form.component';
import { SettingsComponent } from './settings.component';
import { SettingsNavigationComponent } from './settings-navigation/settings-navigation.component';
import { SettingsRPiComponentComponent } from './settings-rpicomponent/settings-rpicomponent.component';
import { SettingsScheduleComponent } from './settings-schedule/settings-schedule.component';
import { SettingsUserComponent } from './settings-user/settings-user.component';
import { RelayScheduleFormComponent } from './settings-schedule/relay-schedule-form/relay-schedule-form.component';
import { RelayScheduleListComponent } from './settings-schedule/relay-schedule-list/relay-schedule-list.component';
import { RPiPinoutComponent } from './settings-rpicomponent/rpi-pinout/rpi-pinout.component';


@NgModule({
  imports: [
    SharedModule,
    UiSwitchModule,
    RouterModule.forChild(SETTINGS_ROUTES)
  ],
  exports: [SettingsComponent],
  declarations: [
    RPiComponentAddComponent,
    RPiComponentEditComponent,
    RPiComponentFormComponent,
    RPiComponentsComponent,
    SettingsComponent,
    SettingsNavigationComponent,
    SettingsRPiComponentComponent,
    SettingsScheduleComponent,
    SettingsUserComponent,
    RelayScheduleFormComponent,
    RelayScheduleListComponent,
    RPiPinoutComponent
  ]
})
export class SettingsModule {}
