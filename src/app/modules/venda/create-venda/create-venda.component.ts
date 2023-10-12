import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VendaService } from '../venda.service';
import { Venda } from '../venda';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-venda',
  templateUrl: './create-venda.component.html',
  styleUrls: ['../../camiseta/create/create.component.css','./create-venda.component.css']
})
export class CreateVendaComponent implements OnInit{
  form!: FormGroup;
  id!: number;

  constructor(
    public vendaService: VendaService,
    private router: Router
    ) { }

    ngOnInit(): void {
      this.form = new FormGroup({
      id: new FormControl('', [Validators.required])
      });
      }

      get f(){
        return this.form.controls;
      }

      submit(){
        this.id= this.form.get('id')!.value;
        this.vendaService.createManagement(this.id).subscribe(res => {
             alert('Camiseta criada com sucesso!');
             this.router.navigateByUrl('vendas/edit/'+res);
        })
      }
}
