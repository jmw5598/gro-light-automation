import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationModule } from './authentication/authentication.module';
import { AuthenticationGuard } from './authentication/guard/authentication.guard';
import { RoleGuard } from './authentication/guard/role.guard';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardBuilderComponent } from './dashboard-builder/dashboard-builder.component';
import { LoginComponent } from './login/login.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsRPiComponentComponent } from './settings/settings-rpicomponent/settings-rpicomponent.component';
import { SettingsScheduleComponent } from './settings/settings-schedule/settings-schedule.component';
import { SettingsUserComponent } from './settings/settings-user/settings-user.component';
import { RPiComponentAddComponent } from './settings/rpicomponent-add/rpicomponent-add.component';
import { RPiComponentEditComponent } from './settings/rpicomponent-edit/rpicomponent-edit.component';
import { UnauthorizedComponent } from './shared/component/unauthorized/unauthorized.component';

const appRoutes: Routes = [

  {
    path: 'login',
    loadChildren: '@app/login/login.module#LoginModule'
  },
  {
    path: 'dashboard',
    canActivate: [AuthenticationGuard],
    loadChildren: '@app/dashboard/dashboard.module#DashboardModule'

  },
  {
    path: 'schedule',
    canActivate: [AuthenticationGuard, RoleGuard],
    data: { roles : ['ROLE_ADMIN'] },
    loadChildren: '@app/schedule/schedule.module#ScheduleModule'
  },
  {
    path: 'settings',
    canActivate: [AuthenticationGuard, RoleGuard],
    data: { roles : ['ROLE_ADMIN'] },
    loadChildren: '@app/settings/settings.module#SettingsModule'
  },

  {
    path: 'unauthorized',
    component: UnauthorizedComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
