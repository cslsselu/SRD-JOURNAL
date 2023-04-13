import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public authService:AuthService, private menu: MenuController) {}

  //helps close the sidebar when a menu item is clicked
  closeMenu(){
    this.menu.close();
  }

  // getter fuction that returns a boolean value indicating if teh user is signed in or not
  get isUserSignedIn(): boolean{
    return !!this.authService.user;
  }

  // fuction that calls logout method from auth service
  logout() {
    this.authService.logout();
  }
}
