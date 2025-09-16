import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { SharedMenuComponent } from '../components/shared-menu/shared-menu.component';


@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonGrid, IonRow, IonCol, SharedMenuComponent]
})
export class ProductsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
