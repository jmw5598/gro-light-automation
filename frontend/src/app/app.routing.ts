import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationModule } from './authentication/authentication.module';
import { AuthenticationGuard } from './authentication/guard/authentication.guard';
import { RoleGuard } from './authentication/guard/role.guard';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsRPiComponentComponent } from './settings/settings-rpicomponent/settings-rpicomponent.component';
import { SettingsScheduleComponent } from './settings/settings-schedule/settings-schedule.component';
import { SettingsUserComponent } from './settings/settings-user/settings-user.component';
import { RPiComponentAddComponent } from './settings/rpicomponent-add/rpicomponent-add.component';
import { RPiComponentEditComponent } from './settings/rpicomponent-edit/rpicomponent-edit.component';
import { UnauthorizedComponent } from './core/component/unauthorized/unauthorized.component';

const appRoutes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'schedule',
    component: ScheduleComponent,
    canActivate: [AuthenticationGuard, RoleGuard],
    data: { roles : ['ROLE_ADMIN'] }
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthenticationGuard, RoleGuard],
    data: { roles : ['ROLE_ADMIN'] },
    children: [
      {
        path: '',
        redirectTo: '/settings/(settings:component)',
        pathMatch: 'full'
      },
      {
        path: 'component',
        component: SettingsRPiComponentComponent,
        outlet: 'settings'
      },
      {
        path: 'component.add',
        component: RPiComponentAddComponent,
        outlet: 'settings'
      },
      {
        path: 'component/:id/edit',
        component: RPiComponentEditComponent,
        outlet: 'settings'
      },
      {
        path: 'schedule',
        component: SettingsScheduleComponent,
        outlet: 'settings'
      },
      {
        path: 'user',
        component: SettingsUserComponent,
        outlet: 'settings'
      }
    ]
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

