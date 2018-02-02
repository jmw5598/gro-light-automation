import { Routes } from '@angular/router';

import { RPiAddComponent } from './rpi-add/rpi-add.component';
import { RPiComponentAddComponent } from './rpicomponent-add/rpicomponent-add.component';
import { RPiDetailsComponent} from './rpi-details/rpi-details.component';
import { RPiUploadImageComponent } from './rpi-upload-image/rpi-upload-image.component';
import { SettingsComponent } from '@app/settings/settings.component';
import { SettingsRPiComponent } from './settings-rpi.component';

export const SETTINGS_RPI_ROUTES = [
  {
    path: '',
    children: [
      {
        path: 'rpi',
        component: SettingsComponent,
        children: [
          {
            path: '',
            component: SettingsRPiComponent,
            outlet: 'settings'
          },
        ]
      },
      {
        path: 'rpi/add',
        component: SettingsComponent,
        children: [
          {
            path: '',
            component: RPiAddComponent,
            outlet: 'settings'
          }
        ]
      },
      {
        path: 'rpi/:id',
        component: SettingsComponent,
        children: [
          {
            path: '',
            component: RPiDetailsComponent,
            outlet: 'settings'
          }
        ]
      },
      {
        path: 'rpi/:id/image',
        component: SettingsComponent,
        children: [
          {
            path: '',
            component: RPiUploadImageComponent,
            outlet: 'settings'
          }
        ]
      },
      {
        path: 'rpi/:id/component/add',
        component: SettingsComponent,
        children: [
          {
            path: '',
            component: RPiComponentAddComponent,
            outlet: 'settings'
          }
        ]
      }
    ]
  }
];
