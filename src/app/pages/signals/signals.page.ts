import { Component, OnInit, signal, computed, effect, Injector, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SimpleCardComponent } from 'src/app/components/simple-card/simple-card.component';
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonBadge,
  IonButton,
  IonInput,
  IonGrid,
  IonRow,
  IonCol,
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
    IonInput,
    IonGrid,
    IonRow,
    IonCol,
    CommonModule,
    FormsModule,
    SharedMenuComponent,
    SimpleCardComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush, //Esto hace que angular trabaje con Zoneless, es decir, que no se actualice el DOM cuando cambia el valor de una signal
})
export class SignalsPage implements OnInit {
  counter: number = 0;
  counterSignal = signal(0);
  nameSignal = signal('Jhoan');
  captitalizedName = computed(() => this.nameSignal().toUpperCase()); // Computed signal, se actualiza cuando cambia el valor de nameSignal. Es de solo lectura
  public injector = inject(Injector)

  name: string = ""
  lastName: string = ""
  age: string = ""
  job: string = ""

  constructor() {
    console.log(this.captitalizedName()); // Aqui da error por el console.log, pero funciona en el template
    console.log(this.nameSignal())
    this.nameSignal.set("Jhoan David Sinisterra Valencia")
    setInterval(() => {
      this.counterSignal.update((val) => val + 1)
      console.log("counterSignal en le setInterval:",this.counterSignal())
    }, 1000);
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
