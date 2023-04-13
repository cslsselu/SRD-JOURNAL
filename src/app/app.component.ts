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

  closeMenu(){
    this.menu.close();
  }
  
}
