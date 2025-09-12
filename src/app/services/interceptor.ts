import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Interceptor implements HttpInterceptor {
  
  constructor(private router: Router) { }

  // * Método obligatorio para HttpInterceptor
  intercept<T>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('token');
    console.log("Pasamos por el interceptor", token);

    if(!token){
      next.handle(req);
    }

    const reqHeader = req.clone({
      headers: req.headers.set("Authorization", "Bearer " + token).set("client", "app")
    });
    // Aquí puedes agregar lógica para modificar las requests
    // Por ejemplo: añadir headers de autenticación, logging, etc.
    
    console.log('Request intercepted:', req.url);
    
    // Continúa con la request original
    return next.handle(req);
  }
}
