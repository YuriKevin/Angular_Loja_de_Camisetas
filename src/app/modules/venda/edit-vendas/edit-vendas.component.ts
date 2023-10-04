import { Component, OnInit } from '@angular/core';
import { VendaService } from '../venda.service';
import { Venda } from '../venda';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Camiseta } from '../../camiseta/camiseta';
import { CamisetaVenda } from '../camisetavenda';


@Component({
  selector: 'app-edit-vendas',
  templateUrl: './edit-vendas.component.html',
  styleUrls: ['../details-venda/details-venda.component.css', './edit-vendas.component.css']
})
export class EditVendasComponent implements OnInit{

  id!: number;
  venda: Venda = {} as Venda;
  form!: FormGroup;

  constructor(
    public vendaService: VendaService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    
  }

  ngOnInit(): void {
    if (this.id !== null) {

      this.id = this.route.snapshot.params['id'];
      this.venda.id = this.id;
      
      this.vendaService.find(this.id).subscribe((data: Venda)=>{
      this.venda = data;});
      
    }
    else{
      this.router.navigateByUrl('');
      
    }
    this.form = new FormGroup({

      cliente_id: new FormControl('', [Validators.required]),
      data_compra: new FormControl('', [Validators.required]),
   

    });
    for (let camiseta of this.venda.camisetaVendas) {
      this.form.addControl(`quantidade_${camiseta.id}`, new FormControl(camiseta.quantidade));
    }
  }

 
  get f(){
    return this.form.controls;
  }
  

  

    
  submit(){
    console.log(this.form.value);
    this.venda.dia_venda = this.form.value.data_compra;
    this.venda.valor = this.form.value.valor;

    

      this.vendaService.update(this.venda).subscribe(res => {
        alert('Venda atualizada com sucesso!');
        this.vendaService.find(this.id).subscribe((data: Venda)=>{
        this.venda = data;});
        
    })
  }
  AtualizaCamisetasVenda(camiseta: CamisetaVenda) {
    camiseta.vendaId= this.venda.id;
    console.log(camiseta.quantidade);
    this.vendaService.AtualizaCamisetasVenda(camiseta).subscribe(res => {
    this.router.navigateByUrl('/vendas/edit/'+ this.venda.id);
  })
    
  }

}
