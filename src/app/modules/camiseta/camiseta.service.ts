import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Camiseta } from 'src/app/modules/camiseta/camiseta';

@Injectable({
  providedIn: 'root'
})
export class CamisetaService {

  private apiURL = "http://localhost:8080/";

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }
    
  constructor(private httpClient: HttpClient) { }

  getCamisetas(): Observable<Camiseta[]> {
    // A URL da API é construída a partir da base (apiURL) e do endpoint específico
    const url = this.apiURL + 'camisetas';

    
    return this.httpClient.get<Camiseta[]>(url, this.httpOptions)
      .pipe(
        //catchError(this.handleError)
      );
  }

  find(id:number): Observable<any> {
    return this.httpClient.get(this.apiURL + '/camisetas/' + id)
    .pipe(
    //catchError(this.errorHandler)
    )
    }
  
  
  
}
