import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonInput, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonFooter } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { SharedMenuComponent } from '../components/shared-menu/shared-menu.component';
import { AuthService } from '../services/core/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonInput, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonFooter, SharedMenuComponent]
})
export class LoginPage implements OnInit {

  token: string = "DA%4gbd092MLÑhu9UBH2/(Hoi/%";

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    console.log("token:", this.token);
    this.authService.logIn("davidjdsv", "1234")
  }

  login() {
    localStorage.setItem("token", this.token);
    this.router.navigate(["/home"]);
  }

}
