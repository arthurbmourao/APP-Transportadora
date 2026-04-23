import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private readonly API = 'http://localhost:8080/admin';

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<any[]> {
    return this.http.get<any[]>(this.API);
  }

  cadastro(admin: any): Observable<any> {
    return this.http.post<any>(this.API, admin);
  }

  atualizar(admin: any, id: number): Observable<any>{
    return this.http.put(`${this.API}/${id}`, admin, {responseType: 'text'})
  }

  deletar(id:number):Observable<any>{
    return this.http.delete(`${this.API}/${id}`,{responseType : 'text'});
  }
}
