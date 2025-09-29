// crud-usuarios.page.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonGrid,
  IonCol,
  IonRow,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonText,
  IonButton,
  IonIcon,
  ModalController // 👈 Importar el controlador de modales
} from '@ionic/angular/standalone';
import { CrudUsuarios } from 'src/app/services/crudUsuarios/crud-usuarios';
import { SharedMenuComponent } from 'src/app/components/shared-menu/shared-menu.component';
// 👇 Importar el componente del modal que creamos
import { AddUserModalComponent } from 'src/app/components/modals/add-user-modal/add-user-modal.component';

@Component({
  selector: 'app-crud-usuarios',
  templateUrl: './crud-usuarios.page.html',
  styleUrls: ['./crud-usuarios.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    SharedMenuComponent,
    IonGrid,
    IonCol,
    IonRow,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonText,
    IonButton,
    IonIcon
  ],
})
export class CrudUsuariosPage implements OnInit {

  // 👇 Array para almacenar los usuarios (temporal, luego lo moveremos a un servicio)
  usuarios: any[] = [];

  constructor(private modalCtrl: ModalController, private crudUsuarios: CrudUsuarios) {}

  ngOnInit() {
    this.crudUsuarios.getUsers().subscribe({
      next: (res) => {
        this.usuarios = res
      },
      error: (err) => {
        console.error("Error: ", err)
      }
    })
  }

  // 👇 Método que abre el modal cuando presionas "Add user"
  async onAddUser() {
    // Crear el modal
    const modal = await this.modalCtrl.create({
      component: AddUserModalComponent, // 👈 El componente que creamos
    });

    // Mostrar el modal
    await modal.present();

    // Esperar a que el modal se cierre y obtener los datos
    const { data, role } = await modal.onWillDismiss();

    // Si el usuario presionó "Save" (role = 'confirm')
    if (role === 'confirm') {
      console.log('Datos recibidos del modal:', data);
      
      // 👇 Agregar el usuario al array (con un ID temporal)
      const nuevoUsuario = {
        id: this.usuarios.length + 1,
        ...data // Spread operator: copia todas las propiedades de 'data'
      };
      
      this.usuarios.push(nuevoUsuario);
      console.log('Usuarios actuales:', this.usuarios);
    }
  }
}