import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.page.html',
  styleUrls: ['./starwars.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class StarwarsPage implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.getStarWars().subscribe(res => {
    //   console.log(res);
    // });
  }

  getStarWars() {
    //Obtiene la ruta a consultar a datos o a apis
    //pipe funciona para transformar los datos
    //map funciona para transformar los datos y visualizarlos bien
    // return this.http.get('assets/files/star_wars.json').pipe(
    //   map((res: any) => {
    //     console.log(res);
    //     return res.data;
    //   })
    // );
  }

}
