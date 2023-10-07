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

  constructor(public camisetaService: CamisetaService) { }

  ngOnInit(): void {
    this.camisetaService.getCamisetas().subscribe((data: Camiseta[])=>{
    this.camisetas = data;
    console.log(this.camisetas);
    })
    }
    deleteCamiseta(id: number): void {
      if (confirm('Tem certeza que deseja excluir esta camiseta?')) {
       
        this.camisetaService.delete(id).subscribe(() => {
          this.camisetas = this.camisetas.filter(camiseta => camiseta.id !== id);
          
        });
      }
    }

}
