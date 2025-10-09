import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonThumbnail,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';
import { SharedMenuComponent } from 'src/app/components/shared-menu/shared-menu.component';

@Component({
  selector: 'app-grid-test',
  templateUrl: './grid-test.page.html',
  styleUrls: ['./grid-test.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonThumbnail,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonItem,
    IonLabel,
    CommonModule,
    FormsModule,
    SharedMenuComponent,
  ],
})
export class GridTestPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
