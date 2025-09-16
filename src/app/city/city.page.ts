import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from '@ionic/angular/standalone';
import { SharedMenuComponent } from '../components/shared-menu/shared-menu.component';  
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    CommonModule,
    FormsModule,
    RouterLink,
    IonButton,
    SharedMenuComponent,
  ],
})
export class CityPage implements OnInit {
  id: any;
  finalId: any;
  cities: any[] = [];
  name!: any;
  imagen!: string;
  capital!: string;
  descripcion!: string;
  poblacion!: number;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id'); // Obteniendo el id que se envía por el routerLink
    this.finalId = this.id - 1; //Restándole -1 al id para que coincida con el índice del array
    console.log(this.finalId);

    // obteniendo la ciudad por el método obteniendo los datos json y filtrando por el id
    this.getCities().subscribe((res) => {
      this.cities = res;
      this.name = this.cities[this.finalId].name;
      this.imagen = this.cities[this.finalId].imagen;
      this.capital = this.cities[this.finalId].capital;
      this.descripcion = this.cities[this.finalId].descripcion;
      this.poblacion = this.cities[this.finalId].poblacion;
    });
  }

  // obteniendo la ciudad
  getCities() {
    return this.http.get('assets/countries.json').pipe(
      map((res: any) => {
        console.log(res);
        return res.data;
      })
    );
  }
}
