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
  AlertController,
  ModalController, // 👈 Importar el controlador de modales
} from '@ionic/angular/standalone';
import { CrudUsuarios } from 'src/app/services/crudUsuarios/crud-usuarios-service';
import { SharedMenuComponent } from 'src/app/components/shared-menu/shared-menu.component';
// 👇 Importar el componente del modal que creamos
import { AddUserModalComponent } from 'src/app/components/modals/add-user-modal/add-user-modal.component';
import { EditUserModalComponent } from 'src/app/components/modals/edit-user-modal/edit-user-modal.component';
import { DeleteUserModalComponent } from 'src/app/components/modals/delete-user-modal/delete-user-modal.component';

import { Usuario } from 'src/app/modelos/crudUsuarios/crud-usuarios';

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
    IonIcon,
  ],
})
export class CrudUsuariosPage implements OnInit {
  // * Array para almacenar los usuarios, luego recorrerlos y mostrarlos en la tabla etc
  usuarios: Usuario[] = []; // * Un array que recibe datos de tipo Usuario

  constructor(
    private modalCtrl: ModalController,
    private crudUsuarios: CrudUsuarios,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.crudUsuarios.getUsers().subscribe({
      next: (res) => {
        this.usuarios = res; // * Llena el array con lo que traiga del backend desde la bd
      },
      error: (err) => {
        console.error('Error: ', err);
      },
    });
  }

  // * INICIO ALERTAS
  private async showSuccessAlert(nombre?: string) {
    const alert = await this.alertController.create({
      header: '¡Usuario creado!',
      message: `El usuario ${
        nombre ?? 'Nuevo usuario'
      } ha sido agregado correctamente.`,
      buttons: ['Ok'],
    });
    await alert.present();
  }

  private async showErrorAlert(msg?: string) {
    const alert = await this.alertController.create({
      header: '¡Ups! Error al crear el usuario...',
      message: msg ?? `Ocurrió un error al crear el usuario`,
      buttons: ['Entendido'],
    });
    await alert.present();
  }

  private async showSuccessEditAlert() {
    const alert = await this.alertController.create({
      header: '¡Usuario editado!',
      message: 'Se ha editado el usuario correctamente',
      buttons: ['Ok'],
    });
    await alert.present();
  }

  private async showErrorEditAlert() {
    const alert = await this.alertController.create({
      header: '¡Ups¡ Hubo un error!',
      message: 'Hubo un error al editar el usuario...',
      buttons: ['Entendido'],
    });
    await alert.present();
  }

  private async showSuccessDeleteAlert() {
    const alert = await this.alertController.create({
      header: '¡Usuario eliminado!',
      message: 'Se ha eliminado el usuario correctamente',
      buttons: ['Ok'],
    });
    await alert.present();
  }

  private async showErrorDeleteAlert() {
    const alert = await this.alertController.create({
      header: '¡Ups! Hubo un error al eliminar el usuario...',
      message: 'Hubo un error al eliminar el usuario...',
      buttons: ['Entendido'],
    });
    await alert.present();
  }

  // * FIN ALERTAS

  private loadUsers() {
    this.crudUsuarios.getUsers().subscribe({
      next: (res) => {
        this.usuarios = res;
      },
      error: (err) => {
        console.error('Error al recargar los usuarios: ', err);
      },
    });
  }

  // * Método para crear un usuario
  async onAddUser() {
    // Crear el modal
    const modal = await this.modalCtrl.create({
      component: AddUserModalComponent, // * Llama al componente del modal que creamos
    });

    // Mostrar el modal
    await modal.present();

    // Esperar a que el modal se cierre y obtener los datos
    const { data, role } = await modal.onWillDismiss(); // ? Data: Los datos que se enviaron desde el modal, role: El estado de cierre del modal (confirm o cancel)
    console.log('Datos recibidos del modal:', data, role);

    // Si el usuario presionó "Save" (role = 'confirm')
    if (role === 'confirm') {
      console.log('Datos recibidos del modal:', data);

      this.crudUsuarios.createUser(data).subscribe({
        next: async (res) => {
          console.log('Respuesta del servicio: ', res);
          const creado = res ?? data; // ? Toma res si existe, sino, toma data
          await this.showSuccessAlert(creado?.nombre);

          this.loadUsers();
        },
        error: async (err) => {
          await this.showErrorAlert(
            '¡Ups! Hubo un error al crear el usuario. Intente de nuevo.'
          );
        },
      });
    }
  }

  // * Método para editar un usuario
  async onEditUser(usuario: Usuario) {
    const modal = await this.modalCtrl.create({
      component: EditUserModalComponent,
      componentProps: {
        userData: usuario,
      },
    });

    await modal.present();

    const { data, role } = await modal.onWillDismiss();
    console.log('📥 datos del usuario:', data, role);

    if (role == 'Confirm') {
      console.log('📤 Datos que se envían al backend:', data);
      // data contendrá el usuario con los cambios
      this.crudUsuarios.updateUser(data).subscribe({
        next: async (res) => {
          console.log('📥 Respuesta del backend:', res);
          // * Aquí actualiza la lista de los usuarios
          const index = this.usuarios.findIndex(
            (u) => u.id_usuario === res.id_usuario
          ); // u.id_usuario es de finIndex, sino lo encuentra, devuelve -1
          if (index !== -1) {
            this.usuarios[index] = res;
          }

          await this.showSuccessEditAlert();
        },
        error: async (err) => {
          await this.showErrorEditAlert();
        },
      });
    }
  }

  // * Método para eliminar un usuario
  async onDeleteUser(usuario: Usuario) {
    const modal = await this.modalCtrl.create({
      component: DeleteUserModalComponent,
      componentProps: {
        userData: usuario,
      },
    });
    await modal.present();

    const { role } = await modal.onWillDismiss();
    console.log('Rol del modal:', role);

    if (role === 'confirm') {
      console.log('Datos que se envían al backend:', usuario);
      // data contendrá el usuario con los cambios
      this.crudUsuarios.deleteUser(usuario.id_usuario).subscribe({
        next: async (res) => {
          console.log('Respuesta del backend:', res);
          // * Aquí actualiza la lista de los usuarios
          const index = this.usuarios.findIndex((u) => u.id_usuario === usuario.id_usuario); // u.id_usuario es de finIndex, sino lo encuentra, devuelve -1
          if (index !== -1) {
            this.usuarios.splice(index, 1);
          }

          await this.showSuccessDeleteAlert();
        },
        error: async (err) => {
          await this.showErrorDeleteAlert();
        },
      });
    }
  }
}
