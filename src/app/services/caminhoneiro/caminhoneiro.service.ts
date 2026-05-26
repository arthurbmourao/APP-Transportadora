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
  
}
