import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { SharedMenuComponent } from '../components/shared-menu/shared-menu.component';
import { ActionSheetComponent } from '../components/action-sheet/action-sheet.component';

@Component({
  selector: 'app-test-components',
  templateUrl: './test-components.page.html',
  styleUrls: ['./test-components.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, SharedMenuComponent, ActionSheetComponent]
})
export class TestComponentsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
