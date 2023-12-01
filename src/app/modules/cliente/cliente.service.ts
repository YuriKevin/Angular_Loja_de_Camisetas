import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cliente } from 'src/app/modules/cliente/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiURL = "https://springcamisetas-production.up.railway.app/";
  //private apiURL = "https://springcamiseta-production.up.railway.app/";

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }

    constructor(private httpClient: HttpClient) { }

    getClientes(): Observable<Cliente[]> {

      const url = this.apiURL + 'clientes';
  
      return this.httpClient.get<Cliente[]>(url, this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        );
    }

    find(id:number): Observable<any> {
      return this.httpClient.get(this.apiURL + 'clientes/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
    }
    
    findByCPF(cpf:string): Observable<any> {
      return this.httpClient.get(this.apiURL + 'clientes/find?cpf=' + cpf)
      .pipe(
        catchError(this.errorHandler)
      )
    }

    create(cliente:Cliente):  Observable<any> {

      return this.httpClient.post(this.apiURL + 'clientes/', JSON.stringify(cliente), this.httpOptions)
  
      .pipe(
        catchError((error: any) => {
          const mensagemDeErro = error.error.message;
          alert("Erro: " + mensagemDeErro);

        return ('Ocorreu um erro. Por favor, tente novamente mais tarde.');
      })
      )
    }  

    update(cliente:Cliente): Observable<any> {

      return this.httpClient.put(this.apiURL + 'clientes', JSON.stringify(cliente), this.httpOptions)
  
      .pipe(
        catchError(this.errorHandler)
      )
    }

    delete(id:number){
      return this.httpClient.delete(this.apiURL + '/clientes/' + id, this.httpOptions)
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
