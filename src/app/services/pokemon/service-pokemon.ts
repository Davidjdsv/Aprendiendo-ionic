// 1. Primer paso: Importar los módulos necesarios
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Pokemon, NamedAPIResource } from '../../modelos/pokemon/mdl-pokemon';

@Injectable({
  providedIn: 'root'
})
export class ServicePokemon {
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  /**
   * Obtiene una lista de Pokémon.
   * @param {number} limit - Número de elementos a recuperar.
   * @param {number} offset - Posición inicial para recuperar los elementos.
   * @returns {Observable<NamedAPIResource[]>} - Observable con la lista de Pokémon.
   */
  getPokemonList(limit = 20, offset = 0): Observable<NamedAPIResource[]> {
    const params = new HttpParams().set('limit', limit).set('offset', offset);
    return this.http.get<{ results: NamedAPIResource[] }>(`${this.baseUrl}/pokemon`, { params })
      .pipe(map(res => res.results));
  }

  /**
   * Obtiene los detalles de un Pokémon por su nombre o ID.
   * @param {string | number} nameOrId - Nombre o ID del Pokémon.
   * @returns {Observable<Pokemon>} - Observable con los detalles del Pokémon.
   */
  // Detalle: devuelve el objeto Pokemon (según tu interfaz)
  getPokemon(nameOrId: string | number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.baseUrl}/pokemon/${nameOrId}`);
  }
}
