import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './services/interceptor/interceptor';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';
import { filter } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

// El enrutador se encarga de cambiar de página
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet, DatePipe],
  providers: [HttpClient, Interceptor, {provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true}],  
})

// Aqui se ponen las rutas de las nuevas páginas
export class AppComponent implements OnInit {
  // Variable que determina si estamos en la página de login
  isLoginPage: boolean = false;
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Customers', url: '/customers', icon: 'people' },
    { title: 'Products', url: '/products', icon: 'cart' },
    { title: 'Star Wars', url: '/starwars', icon: 'star' },
    { title: 'Countries', url: '/countries', icon: 'globe' },
    { title: 'Calculadora', url: '/calculadora', icon: 'calculator' },
    { title: 'Pokemon', url: '/pokemon', icon: 'game-controller'},
    { title: 'Login', url: '/login', icon: 'log-in' },
    { title: 'LoginV2', url: '/login-v2', icon: 'log-in' },
    { title: 'Crud Usuarios', url: '/crud-usuarios', icon: 'people-circle' },
    { title: 'Infinite Scroll', url: '/infinite-scroll', icon: 'infinite' },
    { title: 'Father-and-son', url: '/father-and-son', icon: 'football' },
    { title: 'Components', url: '/test-components', icon: 'library' },
    { title: 'Rick & Morty-API', url: '/rick-and-morty', icon: 'code' },
    { title: 'Signals', url: '/signals', icon: 'wifi' },
    { title: 'Settings', url: '/settings', icon: 'settings' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  private date = new Date();
  fecha = this.date.toLocaleDateString('es-ES', {
    day: '2-digit',
    year: 'numeric',
    month: '2-digit',
  });
  
  constructor(private router: Router) {
    addIcons({ mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }
  
  ngOnInit() {
    // Escucha los cambios de ruta para determinar si estamos en login
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Verifica si la URL actual es login-v2
      this.isLoginPage = event.url === '/login-v2';
    });
  }
}
