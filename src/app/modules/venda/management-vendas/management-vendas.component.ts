import { Component, OnInit} from '@angular/core';
import {Venda} from '../venda';
import {VendaService} from '../venda.service';
@Component({
  selector: 'app-management-vendas',
  templateUrl: './management-vendas.component.html',
  styleUrls: ['../../camiseta/management/management.component.css','./management-vendas.component.css']
})
export class ManagementVendasComponent implements OnInit{
  vendas: Venda[] = [];
  constructor(public vendaService: VendaService) { }
  ngOnInit(): void {
    this.vendaService.getVendas().subscribe((data: Venda[])=>{
    this.vendas = data;
    console.log(this.vendas);
    })
    }
    deleteVenda(id: number): void {
      if (confirm('Tem certeza que deseja excluir esta venda?')) {
        this.vendaService.delete(id).subscribe(() => {
          
          this.vendaService.getVendas().subscribe((data: Venda[])=>{
            this.vendas = data;
            console.log(this.vendas);
            })
        });
      }
    }
}
