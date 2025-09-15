// Importa las interfaces correctas
import { Injectable } from '@angular/core'; // Esto es para que el service sea injectable en otras partes de la app
import { HttpClient } from '@angular/common/http'; // Esto es para hacer peticiones HTTP
import { Observable } from 'rxjs'; // Esto es para manejar flujos de datos asíncronos
import { map } from 'rxjs/operators'; // Para transformar los datos
import { Pokemon, PokemonListResponse } from '../../modelos/pokemon/mdl-pokemon';

@Injectable({
  providedIn: 'root'
})
export class ServicePokemon {
  private apiUrl = 'https://pokeapi.co/api/v2';
  
  constructor(private http: HttpClient) {}
  
  // Obtener lista de pokémon
  /**
   * Obtener lista de pokémon
   * @param limit Número de pokémon a obtener
   * @param offset Desplazamiento para la paginación
   * @returns Observable con la lista de pokémon
   */
  getPokemonList(limit: number = 50, offset: number = 0): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>(`${this.apiUrl}/pokemon?limit=${limit}&offset=${offset}`)
      .pipe(
        map(response => {
          // Extraer el ID de la URL para cada pokémon
          const resultsWithId = response.results.map(pokemon => {
            const id = this.extractIdFromUrl(pokemon.url);
            return { ...pokemon, id };
          });
          return { ...response, results: resultsWithId };
        })
      );
  }

  /**
   * Extrae el ID del pokémon desde su URL
   * @param url URL del pokémon (ej: https://pokeapi.co/api/v2/pokemon/1/)
   * @returns ID del pokémon
   */
  private extractIdFromUrl(url: string): number {
    const parts = url.split('/');
    // El ID está en la penúltima posición de la URL
    return parseInt(parts[parts.length - 2]) || 0;
  }
  
  // Obtener pokémon específico
  /**
   * Obtener pokémon específico
   * @param nameOrId Nombre o ID del pokémon
   * @returns Observable con el pokémon
   */
  getPokemon(nameOrId: string | number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}/pokemon/${nameOrId}`);
  }
}
