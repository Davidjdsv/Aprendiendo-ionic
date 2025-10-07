import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgControlStatus } from '@angular/forms';
import {
  IonContent,
  IonCard,
  IonItem,
  IonIcon,
  IonButton,
  IonInput,
} from '@ionic/angular/standalone';
import { SharedMenuComponent } from 'src/app/components/shared-menu/shared-menu.component';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.page.html',
  styleUrls: ['./login-user.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonCard,
    CommonModule,
    FormsModule,
    SharedMenuComponent,
    IonItem,
    IonIcon,
    IonButton,
    IonInput,
  ],
  providers: [NgControlStatus],
})
export class LoginUserPage implements OnInit {
  username!: string
  password!: string
  
  constructor() {}

  ngOnInit() {}

  onSubmit(username: string, password: string){
    alert(`Username: ${username}, Password: ${password}`);
  }
}
