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
  styleUrls: ['../../camiseta/edit/edit.component.css','../../camiseta/home/home.component.css','../../cliente/details-cliente/details-cliente.component.css', './edit-vendas.component.css']
})
export class EditVendasComponent implements OnInit{

  id!: number;
  venda: Venda = {} as Venda;
  form!: FormGroup;
  quantidade!: number;
  atualizar: boolean = false;
  camisetaVenda!: CamisetaVenda;
  carregar:boolean = true;

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
      this.carregar = false;
      
    }
    else{
      this.router.navigateByUrl('');
      
    }
    this.form = new FormGroup({

      cliente_id: new FormControl('', [Validators.required]),
      data_compra: new FormControl('', [Validators.required]),
   

    });
  }

 
  get f(){
    return this.form.controls;
  }
  

  

    
  atualizaCompra(){
    this.carregar = true;

    console.log(this.form.value);

    this.venda.dia_venda = this.form.value.data_compra;
    this.venda.valor = this.form.value.valor;

    

      this.vendaService.update(this.venda).subscribe(res => {
        this.carregar = false;
        alert('Venda atualizada com sucesso!');
        this.vendaService.find(this.id).subscribe((data: Venda)=>{
        this.venda = data;});
        
    })
  }
  removerCamiseta(camiseta:CamisetaVenda){
    this.carregar = true;
    camiseta.quantidade = 0;
    this.vendaService.AtualizaCamisetasVenda(camiseta).subscribe(res => {
      alert('Venda atualizada com sucesso!');
      this.vendaService.find(this.id).subscribe((data: Venda)=>{
      this.venda = data;});
      this.carregar = false;
    })
  }
  quantidadeCamiseta(camiseta:CamisetaVenda){
    this.carregar = true;
    this.camisetaVenda = camiseta;
    this.atualizar=true;
    this.carregar = false;



  }
  AtualizaCamisetasVenda() {
    this.carregar = true;
    this.atualizar=false;
    this.camisetaVenda.vendaId= this.venda.id;
    this.camisetaVenda.quantidade = this.quantidade;
    console.log(this.camisetaVenda.quantidade);
    if(this.camisetaVenda.quantidade==0){
     this.camisetaVenda.quantidade = 1;
    }
    console.log(this.camisetaVenda.quantidade);
    this.vendaService.AtualizaCamisetasVenda(this.camisetaVenda).subscribe(res => {

      alert('Venda atualizada com sucesso!');
      this.vendaService.find(this.id).subscribe((data: Venda)=>{
      this.venda = data;
      //this.carregar = false;
    });

  })
    
  }
  fechar(){
    this.atualizar=false;
   }

}
