// importar lo necesario
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonItemSliding,
  IonSearchbar,
  IonRefresher,
  IonRefresherContent,
} from '@ionic/angular/standalone';
import { SharedMenuComponent } from '../../components/shared-menu/shared-menu.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs';

//Usar los imports en el componente
@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.page.html',
  styleUrls: ['./starwars.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    SharedMenuComponent,
    CommonModule,
    FormsModule,
    IonList,
    IonItem,
    IonLabel,
    IonAvatar,
    IonItemSliding,
    IonSearchbar,
    IonRefresher,
    IonRefresherContent,
  ],
})
export class StarwarsPage implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}

  starWars: any[] = []; // Array para almacenar los datos de la API
  permisos!: boolean;
  searchText: any;

  ngOnInit() {
    this.permisos = true;
    this.getStarWars().subscribe((res) => {
      console.log(res);
      this.starWars = res; // Aloja los datos en la variable starWars en el array para luego ser recorrido
      this.searchText = this.starWars; // Almacena los datos en la variable searchText para luego ser filtrados
    });
  }

  getStarWars() {
    //Obtiene la ruta a consultar a datos o a apis
    //pipe funciona para transformar los datos
    //map funciona para transformar los datos y visualizarlos bien
    return this.http.get('assets/star_wars.json').pipe(
      map((res: any) => {
        console.log(res);
        return res.data;
      })
    );
  }

  foundStarWars(event: any) {
    const text = event.target.value;
    if (text && text.trim() != '') {
      this.searchText = this.searchText.filter((user: any) => {
        return user.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });
    } else {
      this.searchText = [...this.starWars];
    }
  }

  /**
   * Método que se ejecuta cuando el usuario hace pull-to-refresh
   * @param event - Evento del refresher que contiene el método complete()
   */
  handleRefresh(event: any) {
    console.log('Iniciando refresh de datos Star Wars...');

    // Simular un delay de carga (opcional, para mostrar la animación)
    setTimeout(() => {
      // Recargar los datos desde el JSON
      this.getStarWars().subscribe((res) => {
        console.log('Datos refrescados:', res);
        this.starWars = res; // Actualizar el array principal
        this.searchText = this.starWars; // Resetear el filtro de búsqueda

        // IMPORTANTE: Llamar a complete() para ocultar el refresher
        event.target.complete();
      });
    }, 1000); // Delay de 1 segundo para mostrar la animación
  }
}
