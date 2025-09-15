import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-pokemon-selected',
  templateUrl: './pokemon-selected.page.html',
  styleUrls: ['./pokemon-selected.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PokemonSelectedPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
