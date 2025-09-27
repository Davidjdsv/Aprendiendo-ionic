import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-crud-usuarios',
  templateUrl: './crud-usuarios.page.html',
  styleUrls: ['./crud-usuarios.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CrudUsuariosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
