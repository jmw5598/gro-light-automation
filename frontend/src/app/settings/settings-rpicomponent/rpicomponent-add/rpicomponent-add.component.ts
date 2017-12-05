import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { RPiComponent } from '@app/shared/model/rpicomponent/rpicomponent.model';
import { RPiComponentService } from '@app/core/service/rpicomponent/rpicomponent.service';
import { RPiComponentFormComponent } from '../rpicomponent-form/rpicomponent-form.component';
import { ToasterService } from '@app/core/component/toaster/toaster.service';
import { ToastType } from '@app/core/component/toaster/toast-type.enum';

@Component({
  selector: 'gro-rpicomponent-add',
  templateUrl: './rpicomponent-add.component.html',
  styleUrls: ['./rpicomponent-add.component.css']
})
export class RPiComponentAddComponent implements OnInit {

  @ViewChild(RPiComponentFormComponent) child: RPiComponentFormComponent;

  formSettings : Object = {
  	submitLabel : 'Create',
  	isClearable : true
  };

  constructor(
    private rPiComponentService: RPiComponentService,
    private toasterService: ToasterService
  ) { }

  ngOnInit() {
  }

  onFormSubmit(component: RPiComponent) {
    console.log(component);
  	this.rPiComponentService.save(component)
      .subscribe(
        data => {
          this.resetForm();
          this.toasterService.toast("Component successfully added", ToastType.SUCCESS);
        },
        error => this.toasterService.toast("Error adding new component", ToastType.WARNING)
      );
  }

  private resetForm() {
    this.child.reset();
  }

}
