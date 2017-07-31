import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { PanelConfiguration } from '@app/shared/model/dashboard/configuration/panel/panel-configuration.model';
import { PanelLocation } from '@app/shared/model/dashboard/configuration/panel/panel-location.enum';

import { Row } from '@app/shared/model/dashboard/configuration/row/row.model';
import { RowConfiguration } from '@app/shared/model/dashboard/configuration/row/row.configuration';

@Component({
  selector: 'gro-fixed-side-panel',
  templateUrl: './fixed-side-panel.component.html',
  styleUrls: ['./fixed-side-panel.component.css']
})
export class FixedSidePanelComponent implements OnInit, OnDestroy {

  private panelLocation = PanelLocation;

  @Input()
  configuration: PanelConfiguration

  constructor() { }

  ngOnInit() {
    this.configuration.rows.push(new Row(new RowConfiguration()));
  }

  ngOnDestroy() {
    this.configuration.rows = new Array<Row>();
  }

}
