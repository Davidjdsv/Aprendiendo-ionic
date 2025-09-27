import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudUsuarios {
  url: string = "http://localhost/backend/api.php"

  constructor(private http: HttpClient){}

  getUers(): Observable<any>{
    return this.http.get<any>(this.url);
  }

  getUser(id: number): Observable<any>{
    return this.http.get<any>(`${this.url}?id=${id}`)
  }

  createUser(usuario: any): Observable<any>{
    return this.http.get<any>(this.url, usuario)
  }
}
