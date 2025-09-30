// add-user-modal.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonButtons, 
  IonButton, 
  IonIcon,
  IonContent,
  IonList,
  IonListHeader,
  IonLabel,
  IonRadioGroup,
  IonRadio,
  IonItem,
  IonInput,
  IonFooter,
  ModalController // * Importante: controla el modal
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, // * Necesario para [(ngModel)]
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonContent,
    IonList,
    IonListHeader,
    IonLabel,
    IonRadioGroup,
    IonRadio,
    IonItem,
    IonInput,
    IonFooter
  ]
})
export class AddUserModalComponent implements OnInit {

  // * Objeto que almacena todos los datos del formulario
  userData = {
    tipo_documento: 'CC', // Valor por defecto
    numero_documento: '',
    nombre: '',
    apellido: '',
    edad: null,
    juego_favorito: ''
  };

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  // * Cierra el modal SIN enviar datos
  dismiss() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  // * Cierra el modal Y envía los datos al componente padre (crud-usuarios.page.ts)
  save() {
    // * Aquí podrías agregar validaciones antes de guardar
    this.modalCtrl.dismiss(this.userData, 'confirm');
  }

}