import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,IonGrid, IonCol, IonRow, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonLabel } from '@ionic/angular/standalone';
import { SharedMenuComponent } from '../components/shared-menu/shared-menu.component';
import { RickAndMorty } from '../services/rickAndMorty/rick-and-morty';
import { RickAndMortyMdl } from '../modelos/rickAndMorty/rick-and-morty';
import { map } from 'rxjs';

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.page.html',
  styleUrls: ['./rick-and-morty.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, SharedMenuComponent,IonGrid, IonCol, IonRow, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonLabel]
})
export class RickAndMortyPage implements OnInit {
  rmCharacters: RickAndMortyMdl[] = [];
  constructor(private rmResponse: RickAndMorty) {}

    ngOnInit() {
    this.rmResponse.getRmCharactersAPI().pipe(
      map(res => res.results.map((d:RickAndMortyMdl) => (
      {
        id: d.id,
        name: d.name,
        status: d.status,
        gender: d.gender,
        location: d.location.name,
        species: d.species,
        image: d.image
      }
      )))
    ).subscribe({
    next:(data)=>{
      console.log("data: ", data);
      this.rmCharacters = data
    },
    error:(e)=>{
      console.error(e)
    }
    })
  }
}
