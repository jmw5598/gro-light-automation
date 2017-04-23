import { Component, OnInit, Input } from '@angular/core';
import { RPiComponent } from '../../_model/rpicomponent';
import { RPiComponentType } from '../../_model/rpicomponent-type.enum';

@Component({
  selector: 'gro-rpicomponents',
  templateUrl: './rpicomponents.component.html',
  styleUrls: ['./rpicomponents.component.css']
})
export class RPiComponentsComponent implements OnInit {
	
  @Input()
  components: RPiComponent[];

  RPiComponentType = RPiComponentType  //need to use enum in template

  constructor() { }

  ngOnInit() {
  }

}
