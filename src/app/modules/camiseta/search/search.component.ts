import { Component, OnInit } from '@angular/core';
import { CamisetaService } from '../camiseta.service';
import { Camiseta } from '../camiseta';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  camisetas: Camiseta[] = [];
  nome!:string;
  carregar:boolean = true;

  constructor(public camisetaService: CamisetaService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      
      if (params.has('nome')) {
      this.nome = params.get('nome') || '';

      if (this.nome !== '') {
        console.log(this.nome);
        this.camisetaService.findByClub(this.nome).subscribe({
          next: (data:Camiseta[]) => {
            this.camisetas = data;
            console.log(this.camisetas);
            this.carregar = false;
          },
          error: (error: any) => {
            this.carregar = false;
            alert('nenhuma camiseta encontrada.');
          }
        });
      } else {
        this.router.navigateByUrl('');
      }
    }
    else if (params.has('pais')) {
      this.nome = params.get('pais') || '';
      if (this.nome !== '') {
        console.log(this.nome);

        this.camisetaService.findByPais(this.nome).subscribe({
          next: (data:Camiseta[]) => {
          this.camisetas = data;
          console.log(this.camisetas);
          this.carregar = false;
          },
          error: (error: any) => {
            this.carregar = false;
            alert('nenhuma camiseta encontrada.');
          }
        });
      } else {
        this.router.navigateByUrl('');
      }
    }
    });
    
    }
}
