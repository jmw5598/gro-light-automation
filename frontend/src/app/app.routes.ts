import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthenticationGuard } from './shared/service/authentication/guard/authentication.guard';
import { RoleGuard } from './shared/service/authentication/guard/role.guard';

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
    path: 'scheduling',
    component: ScheduleComponent,
    canActivate: [AuthenticationGuard, RoleGuard],
    data: { roles : ['ADMIN'] }
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthenticationGuard, RoleGuard],
    data: { roles : ['ADMIN'] }
  },
  {
    path: '**', redirectTo: ''
  }
];

export const routing = RouterModule.forRoot(appRoutes);