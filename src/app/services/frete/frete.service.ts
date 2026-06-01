
import { HttpClient } from '@angular/common/http'; 

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Frete } from '../../types/Frete';



@Injectable({
  providedIn: 'root'
})


export class FreteService {

  private readonly API = 'http://localhost:8080/frete';

  constructor (private http: HttpClient){}

  cadastrar(frete: Frete): Observable<Frete> {
    return this.http.post<Frete>(this.API, frete);
  }

  fretePorId(freteId: number): Observable<Frete> {
    return this.http.get<Frete>(`${this.API}/${freteId}`);
  }

  listarTodos(): Observable<Frete[]> {
    return this.http.get<Frete[]>(this.API);
  }

  atualizar(frete : Frete, id : number) : Observable<String>{
    return this.http.put(`${this.API}/${id}`, frete, {responseType: 'text'})
  }

  deletar(id : number) : Observable<String>{
    return this.http.delete(`${this.API}/${id}`, {responseType : 'text'})
  }
}
  

  

