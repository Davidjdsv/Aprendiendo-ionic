import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// Importa las interfaces correctas
import { MdlPokemon, PokemonListResponse } from '../../modelos/pokemon/mdl-pokemon';

@Injectable({
  providedIn: 'root'
})
export class ServicePokemon {
  private apiUrl = 'https://pokeapi.co/api/v2';
  
  constructor(private http: HttpClient) {}
  
  // Obtener lista de pokémon
  getPokemonList(limit: number = 20, offset: number = 0): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>(`${this.apiUrl}/pokemon?limit=${limit}&offset=${offset}`);
  }
  
  // Obtener pokémon específico
  getPokemon(nameOrId: string | number): Observable<MdlPokemon> {
    return this.http.get<MdlPokemon>(`${this.apiUrl}/pokemon/${nameOrId}`);
  }
}
