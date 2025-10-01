// delete-user-modal.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
  IonText,
  ModalController, // 👈 Para cerrar el modal
} from '@ionic/angular/standalone';
import { Usuario } from 'src/app/modelos/crudUsuarios/crud-usuarios'; // 👈 Interface del usuario

@Component({
  selector: 'app-delete-user-modal',
  templateUrl: './delete-user-modal.component.html',
  styleUrls: ['./delete-user-modal.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonIcon,
    IonText,
  ],
})
export class DeleteUserModalComponent {
  // Recibe los datos del usuario desde la página principal
  @Input() userData!: Usuario;

  constructor(private modalCtrl: ModalController) {}

  // Método para cancelar (cierra el modal sin hacer nada)
  cancel() {
    this.modalCtrl.dismiss(null, 'cancel'); // role: 'cancel'
  }

  // Método para confirmar eliminación (envía el id del usuario)
  confirm() {
    this.modalCtrl.dismiss(
      { id_usuario: this.userData.id_usuario }, // Envía solo el id
      'confirm' // role: 'confirm'
    );
  }
}