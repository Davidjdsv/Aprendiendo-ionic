import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonListHeader,
  IonList,
  IonItem,
} from '@ionic/angular/standalone';
import { SharedMenuComponent } from '../../components/shared-menu/shared-menu.component';
import { ToggleDarkModeComponent } from '../../components/toggle-dark-mode/toggle-dark-mode.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    SharedMenuComponent,
    ToggleDarkModeComponent,
    IonListHeader,
    IonList,
    IonItem,
  ],
})
export class SettingsPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
