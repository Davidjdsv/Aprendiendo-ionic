import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonGrid, IonRow, IonCol, IonSpinner } from '@ionic/angular/standalone';
import { ServicePokemon } from '../services/pokemon/service-pokemon';
import { PokemonListItem, MdlPokemon } from '../modelos/pokemon/mdl-pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonGrid, IonRow, IonCol, IonSpinner, CommonModule, FormsModule]
})
export class PokemonPage implements OnInit {
  pokemonList: PokemonListItem[] = [];
  selected: MdlPokemon | null = null;
  loading: boolean = false;

  constructor(private pokemonService: ServicePokemon) { }

  ngOnInit() {
    this.loadPokemonList();
    console.log(this.pokemonList);
  }

  loadPokemonList(){
    this.loading = true;
    this.pokemonService.getPokemonList().subscribe({
      next: (response) => {
        this.pokemonList = response.results; // Aquí estaba el error!
        this.loading = false;
      }, error: (err) => {
        console.error('Error loading Pokémon list:', err);
        this.loading = false;
      }
    });
  }

  showDetailsPokemon(name: string) {
    this.selected = null; // limpiar mientras carga
    this.pokemonService.getPokemon(name).subscribe({
      next: (pokemon) => (this.selected = pokemon),
      error: (err) => console.error('Error cargando detalle:', err),
    });
  }

}
