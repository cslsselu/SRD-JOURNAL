import { Injectable } from '@angular/core';
import {CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor(private authService: AuthService, private router: Router) {}

 //checks if the user is authenticated, returns true if yes, and navigates to the login page and return false if not. 
 canActivate(): boolean {
  if( this.authService.user){
    return true;
  }
  else {
    this.router.navigate(['/login']);
    return false;
  }
     
 }
  
}
