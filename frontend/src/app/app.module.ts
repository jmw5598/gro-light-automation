import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// COMPONENTS
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { NavigationComponent} from './navigation/navigation.component';

// PROVIDERS
import { AuthenticationService } from './shared/service/authentication/authentication.service';
import { AuthenticationGuard } from './shared/service/authentication/guard/authentication.guard';
import { RoleGuard } from './shared/service/authentication/guard/role.guard';
import { LoginFormComponent } from './login/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SettingsComponent,
    ScheduleComponent,
    LoginFormComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard,
    RoleGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
