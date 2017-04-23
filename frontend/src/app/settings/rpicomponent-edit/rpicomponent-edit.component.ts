import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gro-rpicomponent-edit',
  templateUrl: './rpicomponent-edit.component.html',
  styleUrls: ['./rpicomponent-edit.component.css']
})
export class RPiComponentEditComponent implements OnInit {
  
  formSettings : Object = {
  	submitLabel : 'Save',
  	isClearable : false
  };

  private component: any;
  componentId: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.component = this.route.params.subscribe(params => {
  		// call service to get component with id and assign it to component
  		this.componentId = +params['id'];
  	});
  }

}
