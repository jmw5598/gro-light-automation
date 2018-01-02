import { Component, OnInit } from '@angular/core';

import { PageLoading } from '@app/shared/component/page-loader/page-loading';

import { LayoutPresets } from '@app/shared/model/dashboard/configuration/layout/layout-presets';
import { Layout } from '@app/shared/model/dashboard/configuration/layout/layout.model';
import { PanelType } from '@app/shared/model/dashboard/configuration/panel/panel-type.enum';

@Component({
  selector: 'gro-dashboard-builder',
  templateUrl: './dashboard-builder.component.html',
  styleUrls: ['./dashboard-builder.component.css']
})
export class DashboardBuilderComponent extends PageLoading implements OnInit {

  private panelType = PanelType;
  private layout: Layout;

  constructor() {
    super(true);
  }

  ngOnInit() {
    this.standby();
    setTimeout(() => this.ready(), 1000);
  }

  onAddComponent(component: string) {
    console.log("builder: adding component : " + component);
  }

  onChangeLayoutPreset(layout: Layout) {
    this.layout = layout;
  }

}
