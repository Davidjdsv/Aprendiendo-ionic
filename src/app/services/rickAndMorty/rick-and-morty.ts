import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment'
import { RickAndMortyMdl } from '../../modelos/rickAndMorty/rick-and-morty';
@Injectable({
  providedIn: 'root'
})
export class RickAndMorty {
  
  constructor(private http: HttpClient){}

  apiurl = environment.api

  getRmCharactersAPI(): Observable<RickAndMortyMdl>{
    return this.http.get<RickAndMortyMdl>(`${this.apiurl}character`)
  }
}
