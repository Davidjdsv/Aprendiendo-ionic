import { Component, OnInit, Input  } from '@angular/core';
import { IonAlert, IonButton, IonList, IonItem, IonLabel, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss'],
  standalone: true,
  imports: [IonAlert, IonButton, IonList, IonItem, IonLabel, IonInput]
})
export class ChildComponentComponent  implements OnInit {
  @Input({required: true}) id!: string
  @Input({required: true}) name!: string
  @Input('apellido') lastname!: string
  @Input() age!: string
  @Input() role!: string
  @Input() quote?: string
  constructor() { }

  ngOnInit() {}

}
