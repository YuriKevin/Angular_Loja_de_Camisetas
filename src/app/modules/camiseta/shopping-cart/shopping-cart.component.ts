import { Component, OnInit } from '@angular/core';
import { Camiseta } from '../camiseta';
import { CamisetaService } from '../camiseta.service';
import { CamisetaVenda } from '../../venda/camisetavenda';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['../home/home.component.css','./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{
  camisetas: CamisetaVenda[] = [];
  valorCompra!: number;
  atualizar: boolean = false;
  camisetaVenda!: CamisetaVenda;
  quantidade!: number;

  constructor(private camisetaService: CamisetaService){
    this.camisetas = camisetaService.getCamisetasCarrinho();
    this.valorCompra = camisetaService.valorCarrinho();
    console.log(this.camisetas);
  }
  
  ngOnInit(): void {
   
    
    }
    removeCamisetaCarrinho(camiseta:CamisetaVenda){
      this.camisetaService.removeCamisetaCarrinho(camiseta);
      this.valorCompra = this.camisetaService.valorCarrinho();
    }
    quantidadeCamisetaCarrinho(camiseta:CamisetaVenda){
      this.camisetaVenda = camiseta;
      this.atualizar = true;
    }
    atualizaCamisetaCarrinho(){
      this.camisetaVenda.quantidade = this.quantidade;
      this.atualizar = false;
      this.camisetaService.atualizaCamisetaCarrinho(this.camisetaVenda);
      this.valorCompra = this.camisetaService.valorCarrinho();
    }
    fechar(){
      this.atualizar=false;
     }

}
