import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Page } from '@app/shared/model/paging/page.model';

@Component({
  selector: 'gro-pageable-table',
  templateUrl: './pageable-table.component.html',
  styleUrls: ['./pageable-table.component.css']
})
export class PageableTableComponent implements OnInit {

  @Output()
  onPageChange = new EventEmitter<any>();

  @Input()
  page: Page<any>;

  @Input()
  headings: string[];

  @Input()
  title: string;

  constructor() { }

  ngOnInit() {
  }

  pageChange(page: number) {
    this.onPageChange.emit(page);
  }

}
