import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { SharedMenuComponent } from '../components/shared-menu/shared-menu.component';
import { RickAndMorty } from '../services/rickAndMorty/rick-and-morty';
import { RickAndMortyMdl } from '../modelos/rickAndMorty/rick-and-morty';
import { map } from 'rxjs';

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.page.html',
  styleUrls: ['./rick-and-morty.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, SharedMenuComponent, IonList, IonItem, IonLabel],
})
export class RickAndMortyPage implements OnInit {
  rmCharacters: RickAndMortyMdl[] = [];
  rmpj: any[] = [];

  constructor(private rmResponse: RickAndMorty) {}

  async ngOnInit() {
    this.rmResponse.getRmCharactersAPI().subscribe({
    next:(data)=>{
      let datos = data.results;

      this.rmpj = datos.map((d:any) => (
      {
        id: d.id,
        name: d.name,
        status: d.status,
        species: d.species,
        image: d.image
      }
      ))
    },
    error:(e)=>{
      console.error(e)
    }
    })

  }
}
