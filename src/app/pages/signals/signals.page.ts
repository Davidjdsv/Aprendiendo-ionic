import { Component, OnInit, signal, computed, effect, Injector, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonBadge,
  IonButton,
} from '@ionic/angular/standalone';
import { SharedMenuComponent } from 'src/app/components/shared-menu/shared-menu.component';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.page.html',
  styleUrls: ['./signals.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonBadge,
    IonButton,
    CommonModule,
    FormsModule,
    SharedMenuComponent,
  ],
})
export class SignalsPage implements OnInit {
  counter: number = 0;
  counterSignal = signal(0);
  nameSignal = signal('Jhoan');
  captitalizedName = computed(() => this.nameSignal().toUpperCase());
  public injector = inject(Injector)

  constructor() {
    console.log(this.captitalizedName()); // Aqui da error por el console.log, pero funciona en el template
    this.nameSignal.set("Jhoan David Sinisterra Valencia")
    console.log(this.nameSignal())
  }

  ngOnInit() {}

  logCounter = effect(() => {
    console.log('counterSignal:', this.counterSignal());
  }, { injector: this.injector });

  increment(): void {
    this.counter += 1;
    this.counterSignal.update((value) => value + 1);
  }

  decrement(): void {
    this.counter -= 1;
    if (this.counter >= 0) {
      this.counterSignal.update((value) => value - 1);
    }
  }
}
