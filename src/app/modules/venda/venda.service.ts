import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { tap, catchError, Observable, throwError } from 'rxjs';
import { Venda } from './venda';
import { CamisetaVenda } from './camisetavenda';
@Injectable({
  providedIn: 'root'
})
export class VendaService {
  private apiURL = "http://localhost:8080/";
  //private apiURL = "https://springcamiseta-production.up.railway.app/";

  
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

    update(venda:Venda): Observable<any> {

      return this.httpClient.put(this.apiURL + 'vendas', JSON.stringify(venda), this.httpOptions)
  
      .pipe(
        catchError(this.errorHandler)
      )
    }

    addCamiseta(camiseta:CamisetaVenda){
      return this.httpClient.put(this.apiURL + 'vendas/add_camiseta', JSON.stringify(camiseta), this.httpOptions)
  
      .pipe(
        catchError(this.errorHandler)
      )

    }
    AtualizaCamisetasVenda(camiseta:CamisetaVenda){
      return this.httpClient.put(this.apiURL + '/vendas/atualiza_camiseta', JSON.stringify(camiseta), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )

    }

    delete(id:number){
      return this.httpClient.delete(this.apiURL + 'vendas/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
    }

    create(id:number){
      return this.httpClient.post(this.apiURL + 'vendas/cliente/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
    }

    save(venda:Venda): Observable<any>{
      return this.httpClient.post(this.apiURL + 'vendas/', JSON.stringify(venda), this.httpOptions)
      .pipe(
        catchError((error: any) => {
            const mensagemDeErro = error.error.message;
            alert("Erro: " + mensagemDeErro);

          return ('Ocorreu um erro. Por favor, tente novamente mais tarde.');
        })
      );
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
