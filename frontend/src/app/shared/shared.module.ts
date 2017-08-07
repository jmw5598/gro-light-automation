import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AlertComponent } from './component/alert/alert.component';
import { PanelListGroupComponent } from './component/panel-list-group/panel-list-group.component';
import { RPiComponentFormComponent } from './component/rpicomponent-form/rpicomponent-form.component';
import { UnauthorizedComponent } from './component/unauthorized/unauthorized.component';
import { KeyToTitlePipe } from './pipe/key-to-title/key-to-title.pipe';
import { KeyExtractPipe } from './pipe/key-extract/key-extract.pipe';
import { CelsiusToFahrenheitPipe } from './pipe/celsius-to-fahrenheit/celsius-to-fahrenheit.pipe';
import { SimpleLoaderComponent } from './component/simple-loader/simple-loader.component';
import { PageLoaderComponent } from './component/page-loader/page-loader.component';
import { ScrollableDirective } from './directive/scrollable/scrollable.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    AlertComponent,
    CelsiusToFahrenheitPipe,
    CommonModule,
    FormsModule,
    KeyToTitlePipe,
    KeyExtractPipe,
    PageLoaderComponent,
    PanelListGroupComponent,
  	ReactiveFormsModule,
    RPiComponentFormComponent,
  	RouterModule,
    SimpleLoaderComponent,
    UnauthorizedComponent,
    ScrollableDirective
  ],
  declarations: [
    AlertComponent,
    CelsiusToFahrenheitPipe,
    KeyToTitlePipe,
    KeyExtractPipe,
    PageLoaderComponent,
    PanelListGroupComponent,
    RPiComponentFormComponent,
    SimpleLoaderComponent,
    UnauthorizedComponent,
    ScrollableDirective
  ]
})
export class SharedModule { }
