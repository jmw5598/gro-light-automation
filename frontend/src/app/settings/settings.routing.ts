import { Routes } from '@angular/router';

import { SettingsComponent } from '@app/settings/settings.component';
import { SettingsRPiComponentComponent } from '@app/settings/settings-rpicomponent/settings-rpicomponent.component';
import { SettingsScheduleComponent } from '@app/settings/settings-schedule/settings-schedule.component';
import { SettingsUserComponent } from '@app/settings/settings-user/settings-user.component';
import { RPiComponentAddComponent } from '@app/settings/settings-rpicomponent/rpicomponent-add/rpicomponent-add.component';
import { RPiComponentEditComponent } from '@app/settings/settings-rpicomponent/rpicomponent-edit/rpicomponent-edit.component';

export const SETTINGS_ROUTES = [
  {
    path: '',
    children: [
      {
        path: 'component',
        component: SettingsComponent,
        children: [{
          path: '',
          component: SettingsRPiComponentComponent,
          outlet: 'settings'
        }]
      },
      {
        path: 'component/add',
        component: SettingsComponent,
        children: [
          {
            path: '',
            component: RPiComponentAddComponent,
            outlet: 'settings'
          }
        ]
      },
      {
        path: 'component/:id/add',
        component: SettingsComponent,
        children: [
          {
            path: '',
            component: RPiComponentAddComponent,
            outlet: 'settings'
          }
        ]
      },
      {
        path: 'schedule',
        component: SettingsComponent,
        children: [
          {
            path: '',
            component: SettingsScheduleComponent,
            outlet: 'settings'
          }
        ]
      },
      {
        path: 'user',
        component: SettingsComponent,
        children: [
          {
            path: '',
            component: SettingsUserComponent,
            outlet: 'settings'
          }
        ]
      }
    ]
  }
];
