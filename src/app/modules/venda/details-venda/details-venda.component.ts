import { Component, OnInit} from '@angular/core';
import {Venda} from '../venda';
import {VendaService} from '../venda.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-details-venda',
  templateUrl: './details-venda.component.html',
  styleUrls: ['../../cliente/details-cliente/details-cliente.component.css','./details-venda.component.css']
})
export class DetailsVendaComponent implements OnInit{
  id!:number;
  venda!: Venda;

  constructor(private route: ActivatedRoute, private router: Router, public vendaService: VendaService) { 
    
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.vendaService.find(this.id).subscribe((data: Venda)=>{
    this.venda = data;
    console.log(this.venda);
    })
    }

}
