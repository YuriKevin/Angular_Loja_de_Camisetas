import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


import { Camiseta } from 'src/app/modules/camiseta/camiseta';
import { CamisetaVenda } from '../venda/camisetavenda';

@Injectable({
  providedIn: 'root'
})
export class CamisetaService {
  private apiURL = "http://localhost:8080/";
  //private apiURL = "https://camisetas.up.railway.app/";
  public carrinho: CamisetaVenda[] = [];

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
        catchError(this.errorHandler)
      );
  }

  find(id:number): Observable<any> {
    return this.httpClient.get(this.apiURL + 'camisetas/' + id)
    .pipe(
      catchError(this.errorHandler)
    )

    }
    findByClub(nome:string): Observable<Camiseta[]> {
      // A URL da API é construída a partir da base (apiURL) e do endpoint específico
      const url = this.apiURL + 'camisetas/find?nome='+ nome;
  
      
      return this.httpClient.get<Camiseta[]>(url, this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        );
    }

    findByPais(nome:string): Observable<Camiseta[]> {
      // A URL da API é construída a partir da base (apiURL) e do endpoint específico
      const url = this.apiURL + 'camisetas/find2?pais='+ nome;
  
      
      return this.httpClient.get<Camiseta[]>(url, this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        );
    }

    create(camiseta:Camiseta):  Observable<any> {

      return this.httpClient.post(this.apiURL + 'camisetas/', JSON.stringify(camiseta), this.httpOptions)
  
      .pipe(
        catchError(this.errorHandler)
      )
    }  
  
    update(camiseta:Camiseta): Observable<any> {

      return this.httpClient.put(this.apiURL + 'camisetas', JSON.stringify(camiseta), this.httpOptions)
  
      .pipe(
        catchError(this.errorHandler)
      )
    }
       
    delete(id:number){
      return this.httpClient.delete(this.apiURL + '/camisetas/' + id, this.httpOptions)
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

   addCamisetaCarrinho(camiseta: CamisetaVenda) {
    const index = this.carrinho.findIndex(camisetaCarrinho => camisetaCarrinho.camiseta.id === camiseta.camiseta.id);
    if (index !== -1) {
      // Camiseta já existe no carrinho, então vamos substituir
      this.carrinho[index].quantidade += camiseta.quantidade;
      console.log('Camiseta encontrada e atualizada no carrinho.');
    } else {
      // Camiseta não está no carrinho, então você pode adicioná-la
      this.carrinho.push(camiseta);
      console.log('Camiseta adicionada ao carrinho.');
    }
  }

  getCamisetasCarrinho(){
    return this.carrinho;
  }
  
  removeCamisetaCarrinho(camiseta: CamisetaVenda) {
    const index = this.carrinho.findIndex(camisetaCarrinho => camisetaCarrinho.camiseta.id === camiseta.camiseta.id);
    if (index !== -1) {
    this.carrinho.splice(index, 1);
    console.log(this.carrinho);
    }
  }

  atualizaCamisetaCarrinho(camiseta:CamisetaVenda){
    const index = this.carrinho.findIndex(camisetaCarrinho => camisetaCarrinho.camiseta.id === camiseta.camiseta.id);
    if (index !== -1) {
      this.carrinho[index].quantidade = camiseta.quantidade;
      console.log(this.carrinho);
    }
  }

  valorCarrinho(){
    let valor = 0;
    this.carrinho.forEach(camisetaCarrinho => {
      valor += camisetaCarrinho.camiseta.valor * camisetaCarrinho.quantidade;
    });
    return valor;
  }

  limpaCarrinho(){
    this.carrinho = [];
  }
}
