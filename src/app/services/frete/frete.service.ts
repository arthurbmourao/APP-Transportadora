
import { HttpClient } from '@angular/common/http'; 

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})


export class FreteService {

  private readonly API = 'http://localhost:8080/frete';

  constructor (private http: HttpClient){}

  criarFrete(frete: any): Observable<any> {
    return this.http.post<any>(this.API, frete);
  }

  fretePorId(freteId: number): Observable<any> {
    return this.http.get<any>(`${this.API}/${freteId}`);
  }

  listarTodos(): Observable<any[]> {
    return this.http.get<any[]>(this.API);
  }

}
  

  

