import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Venda } from './venda';
@Injectable({
  providedIn: 'root'
})
export class VendaService {
  private apiURL = "http://localhost:8080/";

  
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }

    constructor(private httpClient: HttpClient) { }

    getVendas(): Observable<Venda[]> {

      const url = this.apiURL + 'vendas/';
  
      return this.httpClient.get<Venda[]>(url, this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        );
    }
    find(id:number): Observable<any> {
      return this.httpClient.get(this.apiURL + 'vendas/'+id)
      .pipe(
        catchError(this.errorHandler)
      )
    }

    getClienteVendas(id:number): Observable<Venda[]> {

      const url = this.apiURL + 'vendas/cliente/'+ id;
  
      return this.httpClient.get<Venda[]>(url, this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        );
    }

    delete(id:number){
      return this.httpClient.delete(this.apiURL + '/vendas/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
    }

    errorHandler(error:any) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(errorMessage);
   }
}
