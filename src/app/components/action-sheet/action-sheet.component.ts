import { Component, OnInit } from '@angular/core';
import { IonButton, IonActionSheet } from '@ionic/angular/standalone';
import type { OverlayEventDetail } from '@ionic/core'

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.component.html',
  styleUrls: ['./action-sheet.component.scss'],
  imports: [IonButton, IonActionSheet],
})
export class ActionSheetComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'Destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      role: 'share',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  logResult(event: CustomEvent<OverlayEventDetail>) {
    console.log(JSON.stringify(event.detail, null, 2));
  }
}
