import { Component } from '@angular/core';
import { AuthenticationService } from '../_service/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'gro-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor(
    public auth: AuthenticationService,
    public router: Router
  ) {}

  logout() {
    this.auth.doLogout();
    this.router.navigate(['login']);
  }

}
