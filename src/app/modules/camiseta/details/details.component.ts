import { Component, OnInit } from '@angular/core';
import { CamisetaService } from '../camiseta.service';
import { Camiseta } from '../camiseta';
import { ActivatedRoute, Router } from '@angular/router';
import { CamisetaVenda } from '../../venda/camisetavenda';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id!: number;
  camiseta!: Camiseta;
  camisetaVenda!: CamisetaVenda;
  quantidade: number = 1;
  carregar:boolean = true;


  constructor(private route: ActivatedRoute, private router: Router, public camisetaService: CamisetaService) { 
    this.camisetaVenda = {
      id: 0,
      camiseta: {
        id:0,
        clube: "",
        imagem: "",
        ano:0,
        quantidade:0,
        valor:0
      },
      vendaId: 0,
      quantidade: 0,
      valor: 0,
    };
  }
  
  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
  
    if (this.id !== null) {
      console.log(this.id);

       this.camisetaService.find(this.id).subscribe((data: Camiseta)=>{
        this.camiseta = data;
        this.carregar=false;

        })
       
    }
    else{
      this.router.navigateByUrl('');
    }
  }
  
//&& typeof this.id === 'number'

  addCamisetaCarrinho() {
    this.camisetaVenda.camiseta = this.camiseta;
    this.camisetaVenda.quantidade = this.quantidade;
    this.camisetaVenda.valor = this.camiseta.valor;
    console.log(this.camisetaVenda);
    this.camisetaService.addCamisetaCarrinho(this.camisetaVenda);

  }



}
