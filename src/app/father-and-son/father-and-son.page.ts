import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-father-and-son',
  templateUrl: './father-and-son.page.html',
  styleUrls: ['./father-and-son.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FatherAndSonPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
