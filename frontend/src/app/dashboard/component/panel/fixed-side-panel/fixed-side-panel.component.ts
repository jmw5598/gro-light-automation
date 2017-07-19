import { Component, OnInit, Input } from '@angular/core';

import { PanelConfiguration } from '../../../model/panel/panel-configuration.model';
import { PanelLocation } from '../../../model/panel/panel-location.enum';

@Component({
  selector: 'gro-fixed-side-panel',
  templateUrl: './fixed-side-panel.component.html',
  styleUrls: ['./fixed-side-panel.component.css']
})
export class FixedSidePanelComponent implements OnInit {

  private panelLocation = PanelLocation;

  @Input()
  configuration: PanelConfiguration

  constructor() { }

  ngOnInit() {
  }

}
