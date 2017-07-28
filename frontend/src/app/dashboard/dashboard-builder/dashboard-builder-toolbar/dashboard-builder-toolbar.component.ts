import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { LayoutPresets } from '@app/dashboard/model/layout-presets';

@Component({
  selector: 'gro-dashboard-builder-toolbar',
  templateUrl: './dashboard-builder-toolbar.component.html',
  styleUrls: ['./dashboard-builder-toolbar.component.css']
})
export class DashboardBuilderToolbarComponent implements OnInit {

  private layouts = LayoutPresets;

  @Input()
  currentLayout: Object;

  @Output()
  onAddComponent: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  onChangeLayoutPreset: EventEmitter<Object> = new EventEmitter<Object>();

  constructor() { }

  ngOnInit() {
  }

  addComponent(component: string) {
    console.log("toolbar: adding component : " + component);
    this.onAddComponent.emit(component);
  }

  changeLayoutPreset(layout: Object) {
    this.onChangeLayoutPreset.emit(layout);
  }

}
