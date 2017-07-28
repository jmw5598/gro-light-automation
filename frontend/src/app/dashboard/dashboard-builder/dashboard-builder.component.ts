import { Component, OnInit } from '@angular/core';

import { LayoutPresets } from '@app/dashboard/model/layout-presets';
import { PanelType } from '@app/dashboard/model/configuration/panel/panel-type.enum';

@Component({
  selector: 'gro-dashboard-builder',
  templateUrl: './dashboard-builder.component.html',
  styleUrls: ['./dashboard-builder.component.css']
})
export class DashboardBuilderComponent implements OnInit {

  private panelType = PanelType;
  private layout: Object;

  constructor() { }

  ngOnInit() {
  }

  onAddComponent(component: string) {
    console.log("builder: adding component : " + component);
  }

  onChangeLayoutPreset(layout: Object) {
    this.layout = layout;
  }

}
