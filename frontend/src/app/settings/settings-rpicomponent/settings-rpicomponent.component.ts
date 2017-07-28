import { Component, OnInit } from '@angular/core';

import { PageLoading } from '@app/shared/component/page-loader/page-loading';
import { RPiComponent } from '@app/shared/model/rpicomponent/rpicomponent.model';
import { RPiComponentService } from '@app/core/service/rpicomponent/rpicomponent.service';

@Component({
  selector: 'gro-settings-rpicomponent',
  templateUrl: './settings-rpicomponent.component.html',
  styleUrls: ['./settings-rpicomponent.component.css']
})
export class SettingsRPiComponentComponent extends PageLoading implements OnInit {

  components: RPiComponent[];

  constructor(private rPiComponentService: RPiComponentService) {
    super(true);
  }

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
          data => { this.components = data; setTimeout(() => this.ready(), 1000); },
          error => console.log('Error: ' + error)  // DISPLAY ERROR IN TABLE BODY
        );
  }

}
