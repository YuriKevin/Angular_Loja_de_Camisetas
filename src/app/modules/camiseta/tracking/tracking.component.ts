import { Component, OnInit } from '@angular/core';
import { VendaService } from '../../venda/venda.service';
import { Venda } from '../../venda/venda';
import { ActivatedRoute} from '@angular/router';
import { CamisetaVenda } from '../../venda/camisetavenda';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['../management/management.component.css','./tracking.component.css']
})
export class TrackingComponent implements OnInit{
  venda!: Venda;
  camisetas! :CamisetaVenda[];
  carregar: boolean = true;
  id!: number;

  constructor(public vendaService: VendaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
   
    }

    enviar(){

    this.vendaService.find(this.id).subscribe((data: Venda)=>{
    this.venda = data;
    this.carregar=false;
    this.camisetas = this.venda.camisetaVendas;
    })
  }

}
