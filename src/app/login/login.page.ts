import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  constructor(public nav:NavController) { }

  ngOnInit() {
  }

  public login = "";
  public password = "";

  validaLogin() {

    if (this.login == 'user' && this.password == 'admin') {
      this.nav.navigateForward('home');
    }
    else {
      this.nav.navigateForward('login');
    }
  }


}
