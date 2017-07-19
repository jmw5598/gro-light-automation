import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gro-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  @Input()
  configuration: Object;

  constructor() { }

  ngOnInit() {
  }

}
