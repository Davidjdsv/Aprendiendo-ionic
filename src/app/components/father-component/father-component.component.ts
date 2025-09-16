import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Para ngModel
import { IonAlert, IonButton, IonList, IonItem, IonLabel, IonInput } from '@ionic/angular/standalone';
import { ChildComponentComponent } from '../child-component/child-component.component'; // Importar componente hijo


@Component({
  selector: 'app-father-component',
  templateUrl: './father-component.component.html',
  styleUrls: ['./father-component.component.scss'],
  standalone: true, // Componente standalone
  imports: [IonAlert, IonButton, IonList, IonItem, IonLabel, IonInput, FormsModule, ChildComponentComponent] // Agregar FormsModule y ChildComponent
})
export class FatherComponentComponent  implements OnInit {
  // Propiedades que se pasarán al componente hijo
  id: string = '001';
  name: string = '';
  lastname: string = '';
  age: string = '';
  role: string = '';
  quote: string = 'Esta es una cita opcional';

  constructor() { }

  ngOnInit() {}
}
