import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonGrid, IonRow, IonCol, IonSpinner, IonButton } from '@ionic/angular/standalone';
import { ServicePokemon } from '../services/pokemon/service-pokemon';
import { PokemonListItem, Pokemon } from '../modelos/pokemon/mdl-pokemon';
import { map } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonGrid, IonRow, IonCol, IonSpinner, IonButton, CommonModule, FormsModule]
})
export class PokemonPage implements OnInit {
  pokemonList: PokemonListItem[] = [];
  selected: Pokemon | null = null; // instancia la interface de mdl-pokemon.ts
  loading: boolean = false;
  currentSprite: string = ''; // Para controlar qué sprite mostrar

  constructor(private pokemonService: ServicePokemon) { }

  ngOnInit() {
    this.loadPokemonList();
    console.log(this.pokemonList);
  }

  loadPokemonList(){
    this.loading = true;
    this.pokemonService.getPokemonList().subscribe({
      next: (response) => {
        this.pokemonList = response.results;
        this.loading = false;
      }, error: (err) => {
        console.error('Error loading Pokémon list:', err);
        this.loading = false;
      }
    });
  }

  // Método para seleccionar un Pokémon
  selectPokemon(pokemon: PokemonListItem) {
    this.selected = null;
    this.currentSprite = ''; // Resetear sprite actual
    this.pokemonService.getPokemon(pokemon.name).subscribe({
      next: (pokemon) => {
        this.selected = pokemon;
        // Establecer sprite por defecto (animado si existe)
        this.setDefaultSprite();
      },
      error: (err) => console.error('Error cargando detalle:', err),
    });
  }

  //* Método mejorado transformando datos de la api
  getFormattedPokeAPI(name: string){
    return this.pokemonService.getPokemon(name).pipe(
      map(pokemon => ({
        id: pokemon.id,
        name: pokemon.name.toUpperCase(),
        types: pokemon.types.map(type => type.type.name.toUpperCase()),
        stats: pokemon.stats.map(stat => ({
          name: stat.stat.name.toUpperCase(),
          value: stat.base_stat
        })),
        sprites: pokemon.sprites
      }))
    )
  }

  // Método para establecer el sprite por defecto
  setDefaultSprite() {
    if (this.selected?.sprites?.versions?.['generation-v']?.['black-white']?.animated?.front_default) {
      this.currentSprite = this.selected.sprites.versions['generation-v']['black-white'].animated.front_default;
    } else if (this.selected?.sprites?.front_default) {
      this.currentSprite = this.selected.sprites.front_default;
    }
  }

  // Método para cambiar entre sprites animados
  showAnimatedSprite(type: 'front_default' | 'front_shiny' | 'back_default' | 'back_shiny') {
    if (this.selected?.sprites?.versions?.['generation-v']?.['black-white']?.animated) {
      const animated = this.selected.sprites.versions['generation-v']['black-white'].animated;
      
      // Verificación más segura
      const spriteUrl = animated[type as keyof typeof animated];
      
      if (spriteUrl) {
        this.currentSprite = spriteUrl;
      } else {
        console.warn(`Sprite ${type} no disponible para ${this.selected.name}`);
      }
    }
  }

}
