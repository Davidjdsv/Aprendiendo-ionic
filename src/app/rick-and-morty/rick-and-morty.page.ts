import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { SharedMenuComponent } from '../components/shared-menu/shared-menu.component';

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.page.html',
  styleUrls: ['./rick-and-morty.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, SharedMenuComponent]
})
export class RickAndMortyPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
