import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { RPiComponent } from '../../core/model/rpicomponent/rpicomponent.model';
import { RPiComponentService } from '../../core/service/rpicomponent/rpicomponent.service';


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

  constructor(private rPiComponentService: RPiComponentService) { }

  ngOnInit() {
  }

  onFormSubmit(component: RPiComponent) {
    console.log(component);
  	this.rPiComponentService.save(component)
      .subscribe(
        data => { console.log(data); },
        error => console.log("error saving component")
      );
  }

}
