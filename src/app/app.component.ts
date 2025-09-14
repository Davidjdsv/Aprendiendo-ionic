import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Interceptor } from './services/interceptor';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';
import { inject } from '@angular/core/primitives/di';

// El enrutador se encarga de cambiar de página
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet, HttpClientModule],
  providers: [HttpClient, Interceptor, {provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true}],  
})

// Aqui se ponen las rutas de las nuevas páginas
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Customers', url: '/customers', icon: 'people' },
    { title: 'Products', url: '/products', icon: 'cart' },
    { title: 'Star Wars', url: '/starwars', icon: 'star' },
    { title: 'Countries', url: '/countries', icon: 'globe' },
    { title: 'Calculadora', url: '/calculadora', icon: 'calculator' },
    { title: 'Pokemon', url: '/pokemon', icon: 'game-controller'},
    { title: 'Login', url: '/login', icon: 'log-in' },
    
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {
    addIcons({ mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }
}
