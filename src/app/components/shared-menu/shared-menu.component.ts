import { Component, OnInit, Input } from '@angular/core';
import { IonMenuButton, IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-shared-menu',
  templateUrl: './shared-menu.component.html',
  styleUrls: ['./shared-menu.component.scss'],
  standalone: true,
  imports: [IonMenuButton, IonHeader, IonToolbar, IonTitle]
})
export class SharedMenuComponent  implements OnInit {
   // Paso 2: Input para personalizar el título desde cada página
  @Input() title: string = 'Mi App';
  // Input opcional para mostrar/ocultar el menú
  @Input() showMenu: boolean = true;
  // Input opcional para el color del toolbar
  @Input() color: string = 'primary';

  constructor() { }

  ngOnInit() {}

}
