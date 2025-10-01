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

  @Input() userData!: Usuario // * Tomar los datos del usuario que se va a editar

  constructor(private mdlController: ModalController,
    private crudUsuarioService: CrudUsuarios
  ) { }

  ngOnInit() {
    // * Recuperamos el id del usuario y lo guardamos en userData.id_usuario
    // if(this.userData.id_usuario){
    //   this.crudUsuarioService.getUser(this.userData.id_usuario).subscribe({
    //     next: (res) => {
    //       this.userData = res
    //     },
    //     error: (err) => {
    //       alert(`Ocurrió un error al obtener el usuario: ${err}`)
    //     }
    //   })
    // }
  }

  dismiss(){
    this.mdlController.dismiss(null, "cancel")
  }

  save(){
    this.mdlController.dismiss(this.userData, "Confirm")
  }

}
