import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { KeyToTitlePipe } from '@app/shared/pipe/key-to-title/key-to-title.pipe';
import { RPiComponent } from '@app/shared/model/rpicomponent/rpicomponent.model';
import { RPiComponentType } from '@app/shared/model/rpicomponent/rpicomponent-type.enum';
import { FilterBy } from './rpicomponent-filter/filter-by.enum';

@Component({
  selector: 'gro-rpicomponent-table',
  templateUrl: './rpicomponent-table.component.html',
  styleUrls: ['./rpicomponent-table.component.css']
})
export class RPiComponentTableComponent implements OnInit {

  @Input()
  humidity: Array<RPiComponent>;

  @Input()
  moisture: Array<RPiComponent>;

  @Input()
  proximity: Array<RPiComponent>;

  @Input()
  relay: Array<RPiComponent>;

  @Input()
  temperature: Array<RPiComponent>;

  @Input()
  temperature_humidity: Array<RPiComponent>;

  @Output()
  onComponentDelete: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  onHover: EventEmitter<RPiComponent> = new EventEmitter<RPiComponent>();

  filter: FilterBy = FilterBy.ALL;

  filterBy = FilterBy;

  RPiComponentType = RPiComponentType  //needed to use enum in template

  constructor() { }

  ngOnInit() {}

  delete(id: number) {
    this.onComponentDelete.emit(id);
  }

  hover(component: RPiComponent) {
    this.onHover.emit(component);
  }

  switch(value: FilterBy) {
    return (this.filter === value || this.filter === FilterBy.ALL);
  }

  changeFilter(filter: FilterBy) {
    this.filter = filter;
  }

}
