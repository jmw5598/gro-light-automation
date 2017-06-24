import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { KeyToTitlePipe } from '../../pipe/key-to-title/key-to-title.pipe';
import { KeyExtractPipe } from '../../pipe/key-extract/key-extract.pipe';

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

  ngOnInit() { }

}
