import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonGrid, IonRow, IonCol, IonSpinner } from '@ionic/angular/standalone';
import { SharedMenuComponent } from '../components/shared-menu/shared-menu.component';
import { RouterLink } from '@angular/router';
import { ServicePokemon } from '../services/pokemon/service-pokemon';
import { PokemonListItem, Pokemon } from '../modelos/pokemon/mdl-pokemon';
import { map } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
  standalone: true,
  imports: [IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonGrid, IonRow, IonCol, IonSpinner, CommonModule, FormsModule, RouterLink, SharedMenuComponent]
})
export class PokemonPage implements OnInit {
  pokemonList: PokemonListItem[] = [];
  selected: Pokemon | null = null; // instancia la interface de mdl-pokemon.ts
  loading: boolean = false;
  currentSprite: string = ''; // Para controlar qué sprite mostrar
  id: string | null = null;

  constructor(private pokemonService: ServicePokemon) { }

  ngOnInit() {
    this.loadPokemonList();
  }

  loadPokemonList(){
    this.loading = true;
    this.pokemonService.getPokemonList().subscribe({
      next: (response) => {
        this.pokemonList = response.results;
        // Debugging: verificar que cada pokémon tenga ID
        console.log('Pokemon list cargada:', this.pokemonList);
        console.log('Primer pokemon:', this.pokemonList[0]);
        this.loading = false;
      }, error: (err) => {
        console.error('Error loading Pokémon list:', err);
        this.loading = false;
      }
    });
  }

}
