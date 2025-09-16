import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SharedMenuComponent } from '../components/shared-menu/shared-menu.component';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, RouterLink, SharedMenuComponent]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
