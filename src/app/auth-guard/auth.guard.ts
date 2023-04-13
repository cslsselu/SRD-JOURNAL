import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})

// This file defines an AuthGuard service that implements the CanActivate interface and protects the routes based on user authentication status.
export class AuthGuard implements CanActivate {

  // initializes the AuthGuard with AuthService and Router dependencies.
  constructor(private authService: AuthService, private router: Router) {}

  // checks if the user is authenticated, returns true if yes, and navigates to the login page and returns false if not.
  canActivate(): boolean {
    if (this.authService.user) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
