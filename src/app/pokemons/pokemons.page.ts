import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Pokemon {
  nombre: string;
  nPokedex: number;
  descripcion: string;
  tipo1: string;
  tipo2: string | null;
}

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.page.html',
  styleUrls: ['./pokemons.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonList, IonItem, IonLabel, IonButton
    // ❌ OJO: NO pongas HttpClient aquí.
    // ✅ Si no usas provideHttpClient en main.ts, entonces importa HttpClientModule en imports.
  ]
})
export class PokemonsPage implements OnInit {
  pokemons$!: Observable<Pokemon[]>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Carga el JSON desde assets
    // this.pokemons$ = this.http.get<Pokemon[]>('assets/pokemons.json');
  }

  // trackByDex = (_: number, p: Pokemon) => p.nPokedex;
}
