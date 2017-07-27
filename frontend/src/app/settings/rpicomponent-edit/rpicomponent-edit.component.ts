import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RPiComponent } from '../../shared/model/rpicomponent/rpicomponent.model';
import { RPiComponentService } from '../../core/service/rpicomponent/rpicomponent.service';

@Component({
  selector: 'gro-rpicomponent-edit',
  templateUrl: './rpicomponent-edit.component.html',
  styleUrls: ['./rpicomponent-edit.component.css']
})
export class RPiComponentEditComponent implements OnInit {

  private id: number;

  formSettings : Object = {
  	submitLabel : 'Save',
  	isClearable : false
  };

  private component: any;
  componentId: number;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  	this.component = this.route.params.subscribe(params => {
  		this.id = +params['id'];
      console.log("Id to edit: " + this.id);
  	});
  }

  onFormSubmit(component: RPiComponent) {
    console.log("Saving: ");
    console.log(component);
  }

}
