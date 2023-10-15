import { Component, OnInit} from '@angular/core';
import {Cliente} from '../cliente';
import {ClienteService} from '../cliente.service';


@Component({
  selector: 'app-management-cliente',
  templateUrl: './management-cliente.component.html',
  styleUrls: ['../../camiseta/management/management.component.css', './management-cliente.component.css']
})
export class ManagementClienteComponent implements OnInit {
  clientes: Cliente[] = [];
  clientesFiltrados: Cliente[] = [];
  valorBusca!: string;
  carregar:boolean = true;

  constructor(public clienteService: ClienteService) { }
  ngOnInit(): void {
    this.clienteService.getClientes().subscribe((data: Cliente[])=>{
    this.clientes = data;
    this.clientesFiltrados = this.clientes;
    this.carregar = false;
    })
    }
    deleteCliente(id: number): void {
      if (confirm('Tem certeza que deseja excluir este cliente?')) {
        this.carregar = true;
        this.clienteService.delete(id).subscribe(() => {
          this.clientes = this.clientes.filter(cliente => cliente.id !== id);
          this.clientesFiltrados = this.clientes;
          this.carregar = false;
        });
      }
    }
    busca() {
      this.carregar = true;
      let word = this.valorBusca;
      this.clientesFiltrados =[];
          this.clientes.forEach(cliente => {
            if (cliente.nome.toLowerCase().includes(word)) {
              this.clientesFiltrados.push(cliente);
            }
          });
          this.carregar = false;
      
    }
}
