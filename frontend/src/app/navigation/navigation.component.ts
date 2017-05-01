import { Component, trigger, state, transition, style, animate } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'gro-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  animations: [
    trigger('signal', [
      state('void', style({
        'transform' : 'translateY(-100%)',
        'opacity' : '0'
      })),
      transition('* => *', animate(300))
    ])
  ]
})
export class NavigationComponent {

  show: boolean;

  constructor(
    public auth: AuthenticationService,
    public router: Router
  ) {}

  logout() {
    this.auth.doLogout();
    this.router.navigate(['login']);
  }

  isShown() {
    if(this.auth.isLoggedIn()) {
      this.show = true;
      return true;
    }
  }

}
