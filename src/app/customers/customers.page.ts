import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SharedMenuComponent } from '../components/shared-menu/shared-menu.component';
import { IonContent, IonList, IonItem, IonLabel, IonListHeader } from '@ionic/angular/standalone';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
  standalone: true,
  imports: [SharedMenuComponent, IonContent, CommonModule, FormsModule, RouterLink, IonList, IonItem, IonLabel, IonListHeader]
})
export class CustomersPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
