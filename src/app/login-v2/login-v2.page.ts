import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/core/auth-service';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonButton,
  IonInput,
  IonFooter,
} from '@ionic/angular/standalone';
import { SharedMenuComponent } from '../components/shared-menu/shared-menu.component';

@Component({
  selector: 'app-login-v2',
  templateUrl: './login-v2.page.html',
  styleUrls: ['./login-v2.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    SharedMenuComponent,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonInput,
    IonFooter,
    IonButton
  ],
})
export class LoginV2Page implements OnInit {
  username!: string
  password!: string

  constructor(private auth: AuthService) {}

  ngOnInit() {}

  loginOnClick(username: string, password: string){
    
  }
}
