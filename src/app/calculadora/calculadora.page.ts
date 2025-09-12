import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonItem, IonLabel } from '@ionic/angular/standalone';
import { Calculadora } from '../services/calculadora'; // Importar el servicio para ser usado

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonButton, IonItem, IonLabel]
})
export class CalculadoraPage implements OnInit {

  a: number = 0;
  b: number = 0;
  resultado: number | null = null;
  error: string = '';

  constructor(private calculadora: Calculadora) { }

  ngOnInit() {
  }

  operar(opcion: "sumar" | "restar" | "multiplicar" | "dividir"){
    this.error = '';
    try {
      this.resultado = this.calculadora[opcion](Number(this.a), (this.b));
    } catch(error: any){
      this.resultado = null;
      this.error = error.message;
    }
  }

}
