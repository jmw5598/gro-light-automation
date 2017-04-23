import { Component, OnInit } from '@angular/core';
import { RPiComponent } from '../../_model/rpicomponent';


@Component({
  selector: 'gro-rpicomponent-add',
  templateUrl: './rpicomponent-add.component.html',
  styleUrls: ['./rpicomponent-add.component.css']
})
export class RPiComponentAddComponent implements OnInit {
  
  formSettings : Object = {
  	submitLabel : 'Create',
  	isClearable : true
  };

  constructor() { }

  ngOnInit() {
  }

  onFormSubmit(component: RPiComponent) {
  	console.log("Creating: " + component);
  	console.log(component);
  }

}
