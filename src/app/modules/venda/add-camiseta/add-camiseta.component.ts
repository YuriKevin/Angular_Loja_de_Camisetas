import { Component, OnInit } from '@angular/core';
import { VendaService } from '../venda.service';
import { Venda } from '../venda';
import { ActivatedRoute, Router } from '@angular/router';
import { Camiseta } from '../../camiseta/camiseta';
import { CamisetaService } from '../../camiseta/camiseta.service';
@Component({
  selector: 'app-add-camiseta',
  templateUrl: './add-camiseta.component.html',
  styleUrls: ['../../camiseta/home/home.component.css','./add-camiseta.component.css']
})
export class AddCamisetaComponent implements OnInit{
  id!: number;
  id_camiseta!:number;
  venda: Venda = {} as Venda;
  camiseta: Camiseta = {} as Camiseta;
  camisetas!: Camiseta[];

  constructor(
    public vendaService: VendaService,
    private route: ActivatedRoute,
    private router: Router,
    private camisetaService: CamisetaService
  ) { 
    
  }


  ngOnInit(): void {
   
    
      this.id = this.route.snapshot.params['id'];
      this.venda.id = this.id;
      
      this.vendaService.find(this.id).subscribe((data: Venda)=>{
      this.venda = data;});

      this.camisetaService.getCamisetas().subscribe((data: Camiseta[])=>{
        this.camisetas = data;
        console.log(this.camisetas);
        })


    }
    addCamisetaToVenda(camiseta: Camiseta) {
      this.venda.camisetas.push(camiseta);
      this.vendaService.update(this.venda).subscribe(res => {
        this.router.navigateByUrl('/vendas/edit/'+ this.venda.id);
    })
      
    }
    

  }




