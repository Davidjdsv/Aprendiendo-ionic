import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServicePokemon } from '../services/pokemon/service-pokemon';
import { Pokemon } from '../modelos/pokemon/mdl-pokemon';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { SharedMenuComponent } from '../components/shared-menu/shared-menu.component';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-pokemon-selected',
  templateUrl: './pokemon-selected.page.html',
  styleUrls: ['./pokemon-selected.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, SharedMenuComponent]
})
export class PokemonSelectedPage implements OnInit {

  selected: Pokemon | null = null; // instancia la interface de mdl-pokemon.ts
  currentSprite: string = ''; // Para controlar qué sprite mostrar
  id: string | null = null;

  constructor(private pokemonService: ServicePokemon, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.setDefaultSprite();
    this.showAnimatedSprite("front_default");
    this.id = this.activatedRoute.snapshot.paramMap.get('id'); // Obteniendo el id que se envía por el routerLink
    console.log(this.id);
    this.pokemonService.getPokemon(this.id || '').subscribe(pokemon => {
      this.selected = pokemon;
    })

  }

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
