import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['../../camiseta/edit/edit.component.css','./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit{
  id!: number;
  cliente: Cliente = {} as Cliente;
  form!: FormGroup;
  carregar:boolean = true;

  constructor(
    public clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    
  }

  ngOnInit(): void {
    if (this.id !== null) {

      this.id = this.route.snapshot.params['id'];
      this.cliente.id = this.id;
      this.clienteService.find(this.id).subscribe((data: Cliente)=>{
      this.cliente = data;
      this.carregar = false;

      });
    }
    else{
      this.router.navigateByUrl('');
      
    }
    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required]),
    });
  }

 
  get f(){
    return this.form.controls;
  }
  
    
  submit(){
    this.carregar = true;
    console.log(this.form.value);
    this.cliente.nome = this.form.value.nome;
    this.cliente.cpf = this.form.value.cpf;
      this.clienteService.update(this.cliente).subscribe(res => {
        this.carregar = false;
        console.log('Cliente atualizado com sucesso!');
        this.router.navigateByUrl('clientes/details/'+this.cliente.id);

    })
  }
}
