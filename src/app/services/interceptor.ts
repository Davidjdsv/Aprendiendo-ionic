import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
    
    return next.handle(reqHeader).pipe(
      map((event: HttpEvent<any>) => {
        if(event instanceof HttpResponse){
          console.log("Evento interceptado", event);
        }
        return event;
      }),
    )
  }
}
