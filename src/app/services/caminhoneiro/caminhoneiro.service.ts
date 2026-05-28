import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Caminhoneiro } from '../../types/Caminhoneiro';


@Injectable({
  providedIn: 'root'
})

export class CaminhoneiroService {

  private readonly API = ('http://localhost:8080/caminhoneiros')

  constructor(private http: HttpClient) {}

  listarTodos(): Observable<Caminhoneiro[]> {
    return this.http.get<Caminhoneiro[]>(this.API);
  }

  cadastrar(caminhoneiro : Caminhoneiro): Observable<Caminhoneiro>{
    return this.http.post<Caminhoneiro>(this.API, caminhoneiro)
  }

  atualizar(caminhoneiro : Caminhoneiro, id : number): Observable<Caminhoneiro>{
    return this.http.put<Caminhoneiro>(`${this.API}/${id}`,caminhoneiro)
  }

  deletar(id : number):Observable<String>{
    return this.http.delete(`${this.API}/${id}`,{responseType : 'text'});
  }
  
}
