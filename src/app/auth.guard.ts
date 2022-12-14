import { Injectable } from '@angular/core';
import {  CanActivate,  } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(){
    if (this.auth.logged()){
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
  
}
