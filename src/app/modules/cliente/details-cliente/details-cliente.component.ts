import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { Venda } from '../../venda/venda';
import { VendaService } from '../../venda/venda.service';

@Component({
  selector: 'app-details-cliente',
  templateUrl: './details-cliente.component.html',
  styleUrls: ['./details-cliente.component.css']
})
export class DetailsClienteComponent implements OnInit{
  id!: number;
  cliente: Cliente = {} as Cliente;
  vendas!: Venda[];
  carregar:boolean = true;

  constructor(private route: ActivatedRoute, private router: Router, public clienteService: ClienteService, public vendaService: VendaService) { 
    
  }
  
  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
  
    if (this.id !== null) {
      console.log(this.id);

       this.clienteService.find(this.id).subscribe((data: Cliente)=>{
        this.cliente = data;
        console.log(this.cliente);
        })
        this.vendaService.getClienteVendas(this.id).subscribe((data: Venda[])=>{
          this.vendas = data;
          console.log(this.vendas);
          })
      this.carregar = false;
    }
    else{
      this.router.navigateByUrl('');
    }


  }
}
