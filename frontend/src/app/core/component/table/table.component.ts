import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gro-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
   
  @Input()
  headings: string[];
  
  @Input()
  data: Object[];

  @Input()
  title: string;

  constructor() {
    
  }

  ngOnInit() {
    //this.keys = Object.keys(this.data);
    //console.log(this.keys);
  }

}
