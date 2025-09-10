import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton]
})
export class CountriesPage implements OnInit {

  countries: any[] = [];

  constructor(private http: HttpClient, public toastController: ToastController, public alertController: AlertController) { }

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
    try{
      const toast = await this.toastController.create({
        message: `En ${country.name} la capital es ${country.capital}`,
        duration: 2000,
        position: "top"
      });
      toast.present();
    }catch(error){
      console.log(error);
      this.presentToast(error);
    }
  }

  async presentAlert(country: any) {
    try{
      const alert = await this.alertController.create({
        header: country.name,
        subHeader: country.capital,
        message: `¿Estás seguro de eliminar a ${country.name} de tus países agregados?`,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log('Cancelado');
            },
          },
          {
            text: 'Eliminar',
            role: 'destructive',
            handler: () => {
              console.log('Eliminado');
            }
          }
        ]
      });
      alert.present();
    }catch(error){
      console.log(error);
      this.presentAlert(error);
    }
  }




}
