import { Component } from '@angular/core';
import { AuthenticationService } from '../shared/service/authentication/authentication.service';

@Component({
  selector: 'gro-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor(private auth: AuthenticationService) {}

  logout() {
    this.auth.doLogout();
  }

}
