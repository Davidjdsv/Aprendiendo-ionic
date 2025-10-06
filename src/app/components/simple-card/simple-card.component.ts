import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleCardComponent  implements OnInit {
  @Input() name!: string
  @Input() lastName!: string
  @Input() age!: string
  @Input() job!: string


  constructor() { }

  ngOnInit() {}

}
