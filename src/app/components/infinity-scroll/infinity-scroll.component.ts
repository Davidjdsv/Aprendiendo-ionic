import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonAvatar, IonLabel, IonInfiniteScroll, IonInfiniteScrollContent, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-infinity-scroll',
  templateUrl: './infinity-scroll.component.html',
  styleUrls: ['./infinity-scroll.component.scss'],
  standalone: true,
  imports: [IonList, IonItem, IonAvatar, IonLabel, IonInfiniteScroll, IonInfiniteScrollContent, IonContent],
})
export class InfinityScrollComponent  implements OnInit {
  items: any[] = [];

  constructor() { }

  ngOnInit() {
    this.generateItems();
  }

  // * Genera los items que va a mostrar
  generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 25; i++) {
      this.items.push(count + i);
    }
  }

  // * Evento de scroll infinito
  onIonInfinite(event: any) {
    this.generateItems();
    console.log("Evento de scroll infinito");
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

}
