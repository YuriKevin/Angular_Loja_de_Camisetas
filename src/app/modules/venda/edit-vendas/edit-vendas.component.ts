import { Component, OnInit } from '@angular/core';
import { VendaService } from '../venda.service';
import { Venda } from '../venda';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Camiseta } from '../../camiseta/camiseta';

@Component({
  selector: 'app-edit-vendas',
  templateUrl: './edit-vendas.component.html',
  styleUrls: ['../../camiseta/edit/edit.component.css', './edit-vendas.component.css']
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
  }

 
  get f(){
    return this.form.controls;
  }
  

  removeCamisetaDeVenda(camiseta: Camiseta) {
    const index = this.venda.camisetas.findIndex(c => c.id === camiseta.id);

    if (index !== -1) {
      // Remova a camiseta do array
      this.venda.camisetas.splice(index, 1);
      this.submit();
    }

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

}
