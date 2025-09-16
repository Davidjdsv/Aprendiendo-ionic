import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonFooter } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { SharedMenuComponent } from '../components/shared-menu/shared-menu.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonFooter, SharedMenuComponent]
})
export class LoginPage implements OnInit {

  token: string = "DA%4gbd092MLÑhu9UBH2/(Hoi/%";

  constructor(private router: Router) { }

  ngOnInit() {
    console.log("token:", this.token);
  }

  login() {
    localStorage.setItem("token", this.token);
    this.router.navigate(["/home"]);
  }

}
