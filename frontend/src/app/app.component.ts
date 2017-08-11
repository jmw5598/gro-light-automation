import { Component } from '@angular/core';

import { ToasterLocation } from '@app/core/component/toaster/toaster-location.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private toasterLocation = ToasterLocation;
}
