import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Calculadora {
  sumar(a: number, b: number){
    return a + b;
  }

  restar(a: number, b: number){ return a - b; }

  multiplicar(a: number, b: number){return a * b}

  dividir(a: number, b: number){
    if(b === 0){ throw new Error('No se puede dividir por cero'); }
    return a / b;
  }
}
