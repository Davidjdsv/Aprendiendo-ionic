import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import type { UsersMdl, UsersData } from 'src/app/modelos/users/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    isLoggedIn: boolean = false;
    currentUser!: string;

    constructor(private http: HttpClient) {}

    getAuthToken(): Observable <boolean>{
      if(this.isLoggedIn){
        return of(true)
      } else {
        return of(false)
      }
    }

    logIn(username?: string, password?: string){
      return this.http.get<UsersData>('assets/users.json').pipe(
        map(res => res.data)
      ).subscribe({
        next: (res) => {
          console.log(res)
        }
      })
    }

    logOut(){

    }
  }
