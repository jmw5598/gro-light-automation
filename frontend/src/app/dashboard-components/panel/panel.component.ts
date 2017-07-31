import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { PanelConfiguration } from '@app/shared/model/dashboard/configuration/panel/panel-configuration.model';
import { Row } from '@app/shared/model/dashboard/configuration/row/row.model';
import { RowConfiguration } from '@app/shared/model/dashboard/configuration/row/row.configuration';

@Component({
  selector: 'gro-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit, OnDestroy {

  @Input()
  configuration: PanelConfiguration;

  constructor() { }

  ngOnInit() {
    this.configuration.rows.push(new Row(new RowConfiguration()));
  }

  ngOnDestroy() {
    this.configuration.rows = new Array<Row>();
  }

}
