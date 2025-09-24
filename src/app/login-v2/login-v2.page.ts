import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/core/auth-service';
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonButton,
  IonInput,
  IonFooter,
  IonAlert,
  AlertController 
} from '@ionic/angular/standalone';
import { SharedMenuComponent } from '../components/shared-menu/shared-menu.component';

@Component({
  selector: 'app-login-v2',
  templateUrl: './login-v2.page.html',
  styleUrls: ['./login-v2.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    SharedMenuComponent,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonInput,
    IonFooter,
    IonButton,
  ],
})
export class LoginV2Page implements OnInit {
  username!: string
  password!: string
  message!: string

  constructor(private auth: AuthService, private alertController: AlertController) {}

  ngOnInit() {
    
  }

  loginOnClick(username: string, password: string){
    this.auth.logIn(username, password).subscribe({
      next: (isSuccess) => {
        if(isSuccess){
          this.logMessage("Login exitoso", "Has ingresado al sistema!")
        } else {
          this.logMessage("Login invalido", "Credenciales ingresadas erróneas")
        }
      }
    })
    
    this.auth.currentUser = null
  }

  logOutOnClick(){
    this.auth.logOut()
    this.logMessage("Saliendo del sistema", "Vuelva pronto")
  }

  async logMessage(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['Ok'],
    });

    await alert.present();
  }
}
