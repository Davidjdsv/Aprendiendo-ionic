import { Component, OnInit, Input } from '@angular/core';
import { IonActionSheet } from '@ionic/angular/standalone';
import type { OverlayEventDetail } from '@ionic/core'

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.component.html',
  styleUrls: ['./action-sheet.component.scss'],
  imports: [IonActionSheet],
})
export class ActionSheetComponent implements OnInit {
  @Input() id?: string
  @Input() header?: string
  @Input() subHeader?: string


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
