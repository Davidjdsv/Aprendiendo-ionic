import { Component, OnInit, Input } from '@angular/core';
import { IonLabel } from '@ionic/angular/standalone'


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  imports: [IonLabel]
})
export class ChildComponent  implements OnInit {
  @Input() nombre!: string
  @Input() apellido!: string
  @Input() numero_documento!: string
  @Input() edad!: string

  @Input() title!: string

  constructor() { }

  ngOnInit() {}

}
