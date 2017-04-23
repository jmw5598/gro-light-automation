import { Component, OnInit } from '@angular/core';


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

}
