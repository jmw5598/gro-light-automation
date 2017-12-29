import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FilterBy } from './filter-by.enum';

@Component({
  selector: 'gro-rpicomponent-filter',
  templateUrl: './rpicomponent-filter.component.html',
  styleUrls: ['./rpicomponent-filter.component.css']
})
export class RPiComponentFilterComponent implements OnInit {

  @Output()
  onChangeFilter: EventEmitter<FilterBy> = new EventEmitter<FilterBy>();

  filterBy = FilterBy;
  selected: FilterBy = FilterBy.ALL;

  constructor() { }

  ngOnInit() {
    this.onChangeFilter.emit(FilterBy.ALL);
  }

  changeFilter(filter: FilterBy) {
    this.selected = filter;
    this.onChangeFilter.emit(this.selected);
  }

}
