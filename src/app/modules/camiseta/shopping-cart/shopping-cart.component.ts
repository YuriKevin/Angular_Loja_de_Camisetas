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
  carregar:boolean = true;

  constructor(private camisetaService: CamisetaService){
    this.camisetas = camisetaService.getCamisetasCarrinho();
    this.valorCompra = camisetaService.valorCarrinho();
    console.log(this.camisetas);
  }
  
  ngOnInit(): void {
    this.carregar = false;
    
    }
    removeCamisetaCarrinho(camiseta:CamisetaVenda){
      this.carregar = true;
      this.camisetaService.removeCamisetaCarrinho(camiseta);
      this.valorCompra = this.camisetaService.valorCarrinho();
      this.carregar = false;
    }
    quantidadeCamisetaCarrinho(camiseta:CamisetaVenda){
      this.carregar = true;
      this.camisetaVenda = camiseta;
      this.atualizar = true;
      this.carregar = false;
    }
    atualizaCamisetaCarrinho(){
      this.carregar = true;
      this.camisetaVenda.quantidade = this.quantidade;
      this.atualizar = false;
      this.camisetaService.atualizaCamisetaCarrinho(this.camisetaVenda);
      this.valorCompra = this.camisetaService.valorCarrinho();
      this.carregar = false;
    }
    fechar(){
      this.atualizar=false;
     }

}
