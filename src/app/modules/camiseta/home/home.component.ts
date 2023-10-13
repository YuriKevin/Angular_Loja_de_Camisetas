import { Component, OnInit } from '@angular/core';
import { CamisetaService } from '../camiseta.service';
import { Camiseta } from '../camiseta';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  opcaoSelecionada!: string;
  camisetas: Camiseta[] = [];
  camisetasFiltradas: Camiseta[] = [];
  

  constructor(public camisetaService: CamisetaService) { 
    this.opcaoSelecionada = 'Todas';
  }

  

  ngOnInit(): void {
    this.camisetaService.getCamisetas().subscribe((data: Camiseta[])=>{
    this.camisetas = data;
    this.camisetasFiltradas = this.camisetas;
    
    })
    }

    selecaoAlterada() {
      let opcao = this.opcaoSelecionada;
  
      switch (opcao) {
        case 'Todas':
        this.camisetasFiltradas = this.camisetas;
        break;

        case 'Home':
          this.camisetasFiltradas =[];
          this.camisetas.forEach(camiseta => {
            if (camiseta.clube.toLowerCase().includes('home')) {
              this.camisetasFiltradas.push(camiseta);
            }
          });
        
          break;

        case 'Away':
          this.camisetasFiltradas =[];
          this.camisetas.forEach(camiseta => {
            if (camiseta.clube.toLowerCase().includes('away')) {
              this.camisetasFiltradas.push(camiseta);
            }
          });

          break;

        case 'Fan':
          this.camisetasFiltradas =[];
          this.camisetas.forEach(camiseta => {
            if (camiseta.clube.toLowerCase().includes('fan')) {
              this.camisetasFiltradas.push(camiseta);
            }
          });

          break;

        case 'Special':
          this.camisetasFiltradas =[];
          this.camisetas.forEach(camiseta => {
            if (camiseta.clube.toLowerCase().includes('special')) {
              this.camisetasFiltradas.push(camiseta);
            }
          });

          break;

        default:
          this.camisetasFiltradas = this.camisetas;
      }
    }

   
}
