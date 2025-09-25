import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/angular/standalone';
import { SharedMenuComponent } from '../../components/shared-menu/shared-menu.component';
import { FatherComponent } from '../../components/father/father.component';
// import { ChildComponent } from '../components/child/child.component';

@Component({
  selector: 'app-father-and-son',
  templateUrl: './father-and-son.page.html',
  styleUrls: ['./father-and-son.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    SharedMenuComponent,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    FatherComponent,
  ],
})
export class FatherAndSonPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
