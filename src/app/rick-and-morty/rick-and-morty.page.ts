import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonGrid,
  IonCol,
  IonRow,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonLabel,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from '@ionic/angular/standalone';
import { SharedMenuComponent } from '../components/shared-menu/shared-menu.component';
import { RickAndMorty } from '../services/rickAndMorty/rick-and-morty';
import { RickAndMortyMdl } from '../modelos/rickAndMorty/rick-and-morty';
import { map } from 'rxjs';

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.page.html',
  styleUrls: ['./rick-and-morty.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    SharedMenuComponent,
    IonGrid,
    IonCol,
    IonRow,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonCardSubtitle,
    IonLabel,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
  ],
})

  // ngOnInit() {
  //   this.rmResponse.getRmCharactersAPI().pipe(
  //       map((res) =>
  //         res.results.map((d: RickAndMortyMdl) => ({
  //           id: d.id,
  //           name: d.name,
  //           status: d.status,
  //           gender: d.gender,
  //           location: d.location.name,
  //           species: d.species,
  //           image: d.image,
  //         }))
  //       )
  //     )
  //     .subscribe({
  //       next: (data) => {
  //         console.log('data: ', data);
  //         this.rmCharacters = data;
  //       },
  //       error: (e) => {
  //         console.error(e);
  //       },
  //     });

  //     console.log(this.loadMoreCharacters())
  // }
export class RickAndMortyPage implements OnInit {
  rmCharacters: RickAndMortyMdl[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  hasMorePages: boolean = true;
  constructor(private rmResponse: RickAndMorty) {}

  ngOnInit() {
    this.rmResponse.getRmCharactersAPI().subscribe({
      next: (response) => {
        // Primero guarda la info de páginas
        this.totalPages = response.info.pages;
        console.log('Total de páginas disponibles:', this.totalPages);

        // Después mapea los personajes
        this.rmCharacters = response.results.map((d: RickAndMortyMdl) => ({
          id: d.id,
          name: d.name,
          status: d.status,
          gender: d.gender,
          location: d.location.name,
          species: d.species,
          image: d.image,
        }));
      },
      error: (e) => console.error(e),
    });
  }

  loadMoreCharacters(event?: any) {
    console.log(event)
    if (this.currentPage >= this.totalPages) {
      this.hasMorePages = false;
      if (event) event.target.complete(); // Completar aquí
      console.log('No hay más páginas disponibles');
      return; // No hay más páginas
    }

    this.currentPage++;
    console.log(this.currentPage); // Carga las páginas

    this.rmResponse.getCharactersByPage(this.currentPage).subscribe({
      next: (data) => {
        console.log('Datos recibidos: ', data);

        const mappedCharacters = data.results.map((d: RickAndMortyMdl) => ({
          id: d.id,
          name: d.name,
          status: d.status,
          gender: d.gender,
          location: d.location.name,
          species: d.species,
          image: d.image,
        }));

        // ✅ Agrega los datos mapeados (no los originales)
        this.rmCharacters = [...this.rmCharacters, ...mappedCharacters];
        console.log('Personajes después:', this.rmCharacters.length);
        event.target.complete();
      },
      error: (e) => {
        event.target.complete();
        console.error(e);
        console.log('Error al cargar página:', e); // ← Agrega esto
      },
    });
  }

  onIonInfinite(event: any) {
    console.log('🚀 SCROLL INFINITO DISPARADO - Página actual:', this.currentPage);
    this.loadMoreCharacters(event);
    setTimeout(() => {
    event.target.complete();
  }, 250);
  }
}
