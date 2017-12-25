import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreResolveModule } from './resolve/core-resolve.module';
import { CoreServiceModule } from './service/core-service.module';

import { ToasterComponent } from './component/toaster/toaster.component';
import { ToastMessageComponent } from './component/toaster/toast-message/toast-message.component';

import { ToasterService } from './component/toaster/toaster.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ToasterComponent,
    CoreServiceModule,
    CoreResolveModule
  ],
  declarations: [
    ToasterComponent,
    ToastMessageComponent
  ],
  providers: [
    ToasterService
  ]
})
export class CoreModule { }
