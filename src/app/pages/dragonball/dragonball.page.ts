import {
  Component,
  OnInit,
  signal,
  inject,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonListHeader,
  IonItem,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonLabel
} from '@ionic/angular/standalone';
import { Dragonball } from '../../modelos/dragonball/dragonball';

@Component({
  selector: 'app-dragonball',
  templateUrl: './dragonball.page.html',
  styleUrls: ['./dragonball.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonList,
    IonListHeader,
    IonItem,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonLabel
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonballPage implements OnInit {
  personajes = signal<Dragonball[]>([
    { id: 1, nombre: 'Goku', ki: 1000000, raza: 'Saiyajin' },
    { id: 2, nombre: 'Vegeta', ki: 900000, raza: 'Saiyajin' },
    { id: 3, nombre: 'Piccolo', ki: 600000, raza: 'Namek' },
  ]);

  ngOnInit() {}
}
