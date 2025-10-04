import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonBadge, IonButton } from '@ionic/angular/standalone';
import { SharedMenuComponent } from 'src/app/components/shared-menu/shared-menu.component';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.page.html',
  styleUrls: ['./signals.page.scss'],
  standalone: true,
  imports: [IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonBadge, IonButton, CommonModule, FormsModule, SharedMenuComponent]
})
export class SignalsPage implements OnInit {
  counter: number = 0
  conunterSignal = signal(0)

  increment(){
    this.counter += 1
    this.conunterSignal.update((value) => value + 1)
  }

  decrement(){
    this.counter -= 1
    if(this.counter >= 0){
      this.conunterSignal.update((value) => value - 1)
    }

  }

  constructor() { }

  ngOnInit() {
  }

}
