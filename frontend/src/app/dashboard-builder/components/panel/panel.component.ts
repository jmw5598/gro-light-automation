import { Component, OnInit, Input } from '@angular/core';

import { PanelConfiguration } from '@app/shared/model/dashboard/configuration/panel/panel-configuration.model';
import { Row } from '@app/shared/model/dashboard/configuration/row/row.model';
import { RowConfiguration } from '@app/shared/model/dashboard/configuration/row/row.configuration';

@Component({
  selector: 'gro-dashboard-builder-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  private menuShown;

  @Input()
  configuration: PanelConfiguration;

  constructor() {
    this.menuShown = false;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.configuration.rows = new Array<Row>();
  }

  showMenu() {
    this.menuShown = true;
  }

  hideMenu() {
    this.menuShown = false;
  }

  addColumn() {
    console.log("adding column");
  }

}
