import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
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
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/modelos/crudUsuarios/crud-usuarios';
import { CrudUsuarios } from 'src/app/services/crudUsuarios/crud-usuarios';


@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.scss'],
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
export class EditUserModalComponent  implements OnInit {

  userData: Usuario = {
    id_usuario: 0,
    tipo_documento: 'CC',
    numero_documento: '',
    nombre: '',
    apellido: '',
    edad: "",
    juego_favorito: ''
  }

  @Input() idUsuario!: number

  constructor(private mdlController: ModalController,
    private crudUsuarioService: CrudUsuarios
  ) { }

  ngOnInit() {
    if(this.idUsuario){
      this.crudUsuarioService.getUser(this.idUsuario).subscribe({
        next: (res) => {
          this.userData = res
        },
        error: (err) => {
          alert(`Ocurrió un error al obtener el usuario: ${err}`)
        }
      })
    }
  }

  dismiss(){
    this.mdlController.dismiss(null, "cancel")
  }

  save(){
    this.mdlController.dismiss(this.userData, "Confirm")
  }

}
