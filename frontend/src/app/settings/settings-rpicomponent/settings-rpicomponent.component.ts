import { Component, OnInit } from '@angular/core';

import { RPiComponent } from '../../core/model/rpicomponent/rpicomponent.model';
import { RPiComponentService } from '../../core/service/rpicomponent/rpicomponent.service';

@Component({
  selector: 'gro-settings-rpicomponent',
  templateUrl: './settings-rpicomponent.component.html',
  styleUrls: ['./settings-rpicomponent.component.css']
})
export class SettingsRPiComponentComponent implements OnInit {

  components: RPiComponent[];

  constructor(private rPiComponentService: RPiComponentService) { }

  ngOnInit() {
    this.loadComponents();
  }

  onComponentDelete(id: number) {
    console.log("deleting component: " + id);
    this.rPiComponentService
      .delete(id)
        .subscribe(
          data => this.loadComponents(),
          error => console.log(error)
        );
  }

  private loadComponents() {
    this.rPiComponentService
      .findAll()
        .subscribe(
          data => this.components = data,
          error => console.log('Error: ' + error)  // DISPLAY ERROR IN TABLE BODY
        );
  }

}
