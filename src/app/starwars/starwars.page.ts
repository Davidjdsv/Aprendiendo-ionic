// importar lo necesario
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonAvatar, IonItemSliding, IonSearchbar } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs';

//Usar los imports en el componente
@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.page.html',
  styleUrls: ['./starwars.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonLabel, IonAvatar, IonItemSliding, IonSearchbar]
})
export class StarwarsPage implements OnInit {
  
  constructor(private router: Router, private http: HttpClient) { }

  starWars: any[] = []; // Array para almacenar los datos de la API
  permisos!: boolean;
  searchText: any;
  
  
  ngOnInit() {
    this.permisos = true;
    this.getStarWars().subscribe(res => {
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
    if(text && text.trim() != ""){
      this.searchText = this.searchText.filter((user: any) => {
        return user.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
      })
    } else {
      this.searchText = [...this.starWars];
    }
  }

}
