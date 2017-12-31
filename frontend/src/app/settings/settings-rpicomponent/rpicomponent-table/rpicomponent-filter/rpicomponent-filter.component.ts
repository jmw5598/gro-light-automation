import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

import { SettingsRPiComponentService } from '../../settings-rpicomponent.service';
import { RPiComponentType } from '@app/shared/model/rpicomponent/rpicomponent-type.enum';

@Component({
  selector: 'gro-rpicomponent-filter',
  templateUrl: './rpicomponent-filter.component.html',
  styleUrls: ['./rpicomponent-filter.component.css']
})
export class RPiComponentFilterComponent implements OnInit, OnDestroy {

  rPiComponentType = RPiComponentType;
  selected: RPiComponentType = RPiComponentType.ALL;

  filterSubscription

  constructor(
    private settingsRPiComponentService: SettingsRPiComponentService
  ) { }

  ngOnInit() {
    this.settingsRPiComponentService.componentFilter
      .subscribe(
        data => this.selected = data,
        error => console.log("error subscribing to filter in filter menu")
      )
    this.settingsRPiComponentService.setComponentFilter(RPiComponentType.ALL);
  }

  changeFilter(filter: RPiComponentType) {
    this.settingsRPiComponentService.setComponentFilter(filter);
  }

  ngOnDestroy() {
    if(this.filterSubscription)
      this.filterSubscription.unsubscribe();
  }

}
