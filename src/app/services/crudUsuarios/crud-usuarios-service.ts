import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Usuario, UsuariosResponse } from 'src/app/modelos/crudUsuarios/crud-usuarios';

@Injectable({
  providedIn: 'root'
})
export class CrudUsuarios {
  url: string = "http://localhost/backend/api.php"

  constructor(private http: HttpClient){}

  // * Espera una respuesta que coincida con el tipo de la interface de UsuariosResponse
  getUsers(): Observable<Usuario[]>{
    // * Siendo específicos, obtiene la url que espera de la interface, obteniéndolo
    return this.http.get<UsuariosResponse>(this.url).pipe(
      map(res => {
        return res.records.map((r: Usuario) => ({
          id_usuario: r.id_usuario,
          tipo_documento: r.tipo_documento,
          numero_documento: r.numero_documento,
          nombre: r.nombre,
          apellido: r.apellido,
          edad: r.edad,
          juego_favorito: r.juego_favorito
        }))
      })
    )
  }

  // * Obtener un solo usuario
  getUser(id_usuario: number): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.url}?id_usuario=${id_usuario}`)
  }

  // * Crear un usuario a partir de los datos que le envíe el ts con sus respectivos párametros
  createUser(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.url, usuario)
  }

  // * Actualizar los datos del usuario según con los datos de la interface
  updateUser(usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(this.url, usuario)
  }

  // * Eliminando al usuario obteniendo su id
  deleteUser(id: number): Observable<any>{
    return this.http.delete(this.url, {
      body: {id_usuario: id}
    })
  }
}
