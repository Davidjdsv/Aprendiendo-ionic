import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';
import { SharedMenuComponent } from '../components/shared-menu/shared-menu.component';
import { ChildComponentComponent } from '../components/child-component/child-component.component';
import { FatherComponentComponent } from '../components/father-component/father-component.component';

@Component({
  selector: 'app-father-and-son',
  templateUrl: './father-and-son.page.html',
  styleUrls: ['./father-and-son.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, SharedMenuComponent, IonCard, IonCardContent, IonCardHeader, IonCardTitle, ChildComponentComponent, FatherComponentComponent]
})
export class FatherAndSonPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
