import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../cliente/cliente.service';
import { Cliente } from '../../cliente/cliente';
import { CamisetaVenda } from '../../venda/camisetavenda';
import { CamisetaService } from '../camiseta.service';
import { Venda } from '../../venda/venda';
import { VendaService } from '../../venda/venda.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['../home/home.component.css','./buy.component.css']
})
export class BuyComponent implements OnInit{
  cpf!:string;
  cpf2!:string;
  carregar: boolean = false;
  cliente!: Cliente;
  nome!: string;
  inputNome:boolean = false;
  camisetas: CamisetaVenda[] = [];
  venda!: Venda;
  valorCompra!:number;
  cadastrar: boolean = false;
  naoCoincide: boolean = false;
  aprovado: boolean = false;

  constructor(
    public camisetaService: CamisetaService, 
    public clienteService: ClienteService, 
    public vendaService: VendaService,
    private router: Router
    ) { 
    this.camisetas = camisetaService.getCamisetasCarrinho();
    this.valorCompra = camisetaService.valorCarrinho();
  }
  
  ngOnInit(): void {
    if(this.camisetas.length <=0){
      this.router.navigateByUrl('');
    }

  }

  onCpfChange() {
    if (this.cpf.length === 11) {
      if(this.cpf==this.cpf2){
        this.naoCoincide = false;
        this.buscaCliente();
      }
      else if (this.cpf2 && this.cpf2.length === 11){
        this.naoCoincide = true;
      }
      
    }
  }

  buscaCliente(){
    this.carregar=true;
    this.clienteService.findByCPF(this.cpf).subscribe((data: Cliente)=>{
      this.cliente = data;
      this.carregar=false;
      console.log(this.cliente);
      if(this.cliente){
        this.inputNome = false;
        this.cadastrar = false;
        this.nome = this.cliente.nome;
      }
      else{
        this.inputNome = true;
        this.cadastrar = true;
      }

      })
  }

  cadastrarCliente(){
    this.carregar=true;
    this.cliente = {} as Cliente;
    this.cliente.nome = this.nome;
    this.cliente.cpf = this.cpf;
    this.clienteService.create(this.cliente).subscribe((data: Cliente)=>{
      this.cliente = data;
      this.cadastrar = false;
      this.carregar=false;
      })
      
  }

  efetuarCompra(){
    this.carregar=true;
    this.venda = {} as Venda
    this.venda.camisetaVendas = this.camisetas;
    this.venda.cliente = this.cliente;

    
    console.log(this.venda);
    this.vendaService.save(this.venda).subscribe((res)=>{
      
      if (res.camisetaVendas) {
        this.aprovado = true;
        this.camisetaService.limpaCarrinho();
      }
   
     this.carregar=false;
    })
  }

}