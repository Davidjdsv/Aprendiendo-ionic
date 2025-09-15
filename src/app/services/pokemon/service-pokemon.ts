// Importa las interfaces correctas
import { Injectable } from '@angular/core'; // Esto es para que el service sea injectable en otras partes de la app
import { HttpClient } from '@angular/common/http'; // Esto es para hacer peticiones HTTP
import { Observable } from 'rxjs'; // Esto es para manejar flujos de datos asíncronos
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
    return this.http.get<PokemonListResponse>(`${this.apiUrl}/pokemon?limit=${limit}&offset=${offset}`);
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
