import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonLabel, IonInput } from '@ionic/angular/standalone'


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  standalone: true,
  imports: [IonLabel, IonInput, FormsModule]
})
export class ChildComponent  implements OnInit {
  @Input() nombre!: string
  @Input() apellido!: string
  @Input() numero_documento!: string
  @Input() edad!: string
  @Input() title!: string

  @Input() texto?: string
  
  @Output() textChange = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {}

  emitTitleChange(){
    this.textChange.emit(this.texto)
  }

}
