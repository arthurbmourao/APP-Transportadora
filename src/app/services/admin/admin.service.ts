import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Admin} from '../../types/Admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private readonly API = 'http://localhost:8080/admin';

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.API);
  }

  cadastro(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(this.API, admin);
  }

  atualizar(admin: Admin, id: number): Observable<String>{
    return this.http.put(`${this.API}/${id}`, admin, {responseType: 'text'})
  }

  deletar(id:number):Observable<String>{
    return this.http.delete(`${this.API}/${id}`,{responseType : 'text'});
  }
}
