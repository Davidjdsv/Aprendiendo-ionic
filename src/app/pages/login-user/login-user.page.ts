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
import { CrudUsuarios } from 'src/app/services/crudUsuarios/crud-usuarios-service';

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
  // * Variables para almacenar los valores de los inputs
  username!: string
  password!: string

  constructor(private crudUsuarios: CrudUsuarios) {}

  ngOnInit() {}

  onSubmit(username: string, password: string){
    // this.crudUsuarios.loginUser(username, password).subscribe({
    //   next: (res) => {
    //     console.log(res)
    //   }
    // })
  }
}
