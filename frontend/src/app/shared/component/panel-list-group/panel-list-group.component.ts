import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gro-panel-list-group',
  templateUrl: './panel-list-group.component.html',
  styleUrls: ['./panel-list-group.component.css']
})
export class PanelListGroupComponent implements OnInit {

  @Input()
  data: Object[];

  @Input()
  heading: string;

  constructor() { console.log(this.data); }

  ngOnInit() {
  }

}
