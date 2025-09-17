import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../child/child.component';
import { IonInput } from '@ionic/angular/standalone'

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss'],
  imports: [ChildComponent, IonInput, FormsModule]
})
export class FatherComponent  implements OnInit {
  title: string = "Aprendiendo @Input en Angular v20" // Atributo que se envia al mismo padre en html
  nombre!: string
  apellido!: string
  numero_documento!: string
  edad!: string

  constructor() { }

  ngOnInit() {}

}
