import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import type { UsersMdl, UsersData } from 'src/app/modelos/users/users';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;
  currentUser: UsersMdl | null = null;

  constructor(private http: HttpClient) {}

  // Método que toma el auth.guard que devuelve o true o false
  getAuthToken(): Observable<boolean> {
    if (this.isLoggedIn) {
      return of(true);
    } else {
      return of(false);
    }
  }

  // Método para verificar si las credenciales en la bd coinciden con las credenciales que el usuario ingresó
  logIn(username: string, password?: string): Observable<boolean> {
    return this.http.get<UsersData>('assets/users.json').pipe(
      map((res) => res.data),
      map((users) => {
        const foundUser = users.find(
          (user) => user.username === username && user.password === password
        );

        if (foundUser) {
          this.isLoggedIn = true;
          this.currentUser = foundUser;
          console.log('Login exitoso:', this.currentUser);
          return true;
        } else {
          this.isLoggedIn = false;
          this.currentUser = null;
          console.log('Credenciales incorrectas');
          return false;
        }
      })
    );
  }

  logOut() {
    this.isLoggedIn = false;
    this.currentUser = null
  }
}
