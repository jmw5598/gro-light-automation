import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Injectable()
export class RoleGuard implements CanActivate {
    
    constructor(private auth: AuthenticationService,
                 private router: Router) {
      
    }
    
    canActivate() {
      console.log("RoleGuard: in canActivate");
      // use auth service to get roles
      // get data from router for roles
      // check if role required is in auth service roles
      // if yes return true;
      // else navigate to unauthorized return false
      return true;
    }
    
}