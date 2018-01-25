import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { RPiComponent } from '@app/shared/model/rpicomponent/rpicomponent.model';
import { RPiComponentType } from '@app/shared/model/rpicomponent/rpicomponent-type.enum';

import { SettingsRPiComponentService } from '../../settings-rpicomponent.service';

@Component({
  selector: '[gro-rpicomponent-list]',
  templateUrl: './rpicomponent-list.component.html',
  styleUrls: ['./rpicomponent-list.component.css']
})
export class RPiComponentListComponent implements OnInit {

  @Input()
  type: RPiComponentType;

  @Input()
  components: Array<any>;

  @Output()
  onHover: EventEmitter<RPiComponent> = new EventEmitter<RPiComponent>();

  constructor(
    private router: Router,
    private settingsRPiComponentService: SettingsRPiComponentService
  ) { }

  ngOnInit() {}

  hover(component: RPiComponent) {
    this.settingsRPiComponentService.setSelectedComponent(component);
  }

  edit(id: number) {
    this.router.navigate(['/settings/component/', id]);
  }

}
