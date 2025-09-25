import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/core/auth-service';
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonButton,
  IonInput,
  IonFooter,
  AlertController,
} from '@ionic/angular/standalone';
import { SharedMenuComponent } from '../../components/shared-menu/shared-menu.component';

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
  username!: string;
  password!: string;
  message!: string;

  constructor(
    private auth: AuthService,
    private alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {}

  loginOnClick(username: string, password: string) {
    this.auth.logIn(username, password).subscribe({
      next: (isSuccess) => {
        if (isSuccess) {
          this.router.navigate(['/home'])
          this.logMessage('Login exitoso', 'Has ingresado al sistema!');
          this.clearInputs()
        } else {
          this.logMessage('Login invalido', 'Credenciales ingresadas erróneas');
          this.clearInputs()
        }
      },
      error: (err) => {
        console.error(err)
        this.logMessage("Error:", "Oops! Ha ocurrido un error al iniciar sesión...", err)
      }
    });

    this.auth.currentUser = null;
  }

  logOutOnClick() {
    this.auth.logOut();
    this.logMessage('Saliendo del sistema', 'Vuelva pronto');
  }

  async logMessage(header: string, message: string, subHeader?: string) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: ['Ok'],
    });

    await alert.present();
  }

  clearInputs(){
    this.username = ""
    this.password = ""
  }
}
