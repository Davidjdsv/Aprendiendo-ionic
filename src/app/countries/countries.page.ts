import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent]
})
export class CountriesPage implements OnInit {

  countries: any[] = [];

  constructor(private http: HttpClient, public toastController: ToastController) { }

  ngOnInit() {
    this.getCountries().subscribe(res => {
      console.log(res);
      this.countries = res;
    });
  }

  getCountries() {
    return this.http.get('assets/countries.json').pipe(
      map((res: any) => {
        console.log(res);
        return res.data;
      })
    );
  }

  async presentToast(country: any) {
    const toast = await this.toastController.create({
      message: `En ${country.name} la capital es ${country.capital}`,
      duration: 2000,
      position: "top"
    });
    toast.present();
  }

}
