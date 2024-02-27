import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['../../camiseta/edit/edit.component.css','./create-cliente.component.css']
})
export class CreateClienteComponent  implements OnInit{
  form!: FormGroup;
  cliente!: Cliente;
  carregar:boolean = true;

  constructor(
    public clienteService: ClienteService,
    private router: Router
    ) { }

    ngOnInit(): void {
      this.form = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required])
      });
      this.carregar = false;
      }

      get f(){
        return this.form.controls;
      }

      submit(){
        this.carregar = true;
        
        console.log(this.form.value);
        this.clienteService.create(this.form.value).subscribe(res => {
          this.carregar = false;
          
             alert('Cliente criado com sucesso!');
             this.router.navigateByUrl('create');
        })
      }
        

}
