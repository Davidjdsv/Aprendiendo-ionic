import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonGrid, IonRow, IonCol, IonSpinner, IonButton } from '@ionic/angular/standalone';
import { ServicePokemon } from '../services/pokemon/service-pokemon';
import { PokemonListItem, Pokemon } from '../modelos/pokemon/mdl-pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonGrid, IonRow, IonCol, IonSpinner, IonButton, CommonModule, FormsModule]
})
export class PokemonPage implements OnInit {
  pokemonList: PokemonListItem[] = [];
  selected: Pokemon | null = null;
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

  showDetailsPokemon(name: string) {
    this.selected = null;
    this.currentSprite = ''; // Resetear sprite actual
    this.pokemonService.getPokemon(name).subscribe({
      next: (pokemon) => {
        this.selected = pokemon;
        // Establecer sprite por defecto (animado si existe)
        this.setDefaultSprite();
      },
      error: (err) => console.error('Error cargando detalle:', err),
    });
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
