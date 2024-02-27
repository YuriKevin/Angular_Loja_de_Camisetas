import { Component, OnInit } from '@angular/core';
import { CamisetaService } from '../camiseta.service';
import { Camiseta } from '../camiseta';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  camisetas: Camiseta[] = [];
  camisetasFiltradas: Camiseta[] = [];
  valorBusca!: string;
  carregar:boolean = true;

  constructor(public camisetaService: CamisetaService) { }

  ngOnInit(): void {
    this.camisetaService.getCamisetas().subscribe({
        next: (data: Camiseta[]) => {
          this.camisetas = data;
          this.camisetasFiltradas = this.camisetas;
        this.carregar = false;
      },
      error: (error: any) => {
        alert('Ocorreu um erro ao buscar as camisetas:');
        this.carregar = false; 
      }
    });
  }

    deleteCamiseta(id: number): void {
      if (confirm('Tem certeza que deseja excluir esta camiseta?')) {
        this.carregar=true;
        this.camisetaService.delete(id).subscribe({
          next: () => {
            const index = this.camisetas.findIndex(camiseta => camiseta.id === id);
            if (index !== -1) {
              this.camisetas.splice(index, 1); // Remove a camiseta do array pelo índice
            }
            this.carregar = false;
          },
          error: (error: any) => {
            this.carregar = false;
            alert('Ocorreu um erro ao deletar a camiseta.');
          }
      })
      }
    }
    busca() {
      this.carregar=true;
      let word = this.valorBusca;
      this.camisetasFiltradas =[];
          this.camisetas.forEach(camiseta => {
            if (camiseta.clube.toLowerCase().includes(word)) {
              this.camisetasFiltradas.push(camiseta);
              this.carregar=false;
            }
          });
      
    }

}
