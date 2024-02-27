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
  

  //compra com cartao
  num1Cartao!:number;
  num2Cartao!:number;
  num3Cartao!:number;
  finalCartao!:number;
  nomeCartao!:number;
  cvvCartao!:number;


  //controlar DOM
  cadastrar: boolean = false;
  naoCoincide: boolean = false;
  aprovado: boolean = false;
  boleto: boolean = false;
  cartao: boolean = false;
  pix: boolean = false;
  opcaoPagamento:string = '';
  meioPagamento: boolean = false;
  data:string = '';

  constructor(
    public camisetaService: CamisetaService, 
    public clienteService: ClienteService, 
    public vendaService: VendaService,
    private router: Router
    ) { 
    this.camisetas = camisetaService.getCamisetasCarrinho();
    this.valorCompra = camisetaService.valorCarrinho();
    this.opcaoPagamento= 'boleto';
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
    let validarDados = false;
    if(this.opcaoPagamento=='cartao'){
      if(!this.num1Cartao || !this.num2Cartao || !this.num3Cartao || !this.finalCartao || !this.nomeCartao || !this.cvvCartao){
        alert('Preencha todos os dados do cartão');
        return;
      }
    }
    this.carregar=true;
    this.venda = {} as Venda
    this.venda.camisetaVendas = this.camisetas;
    this.venda.cliente = this.cliente;

    
    console.log(this.venda);
    this.vendaService.save(this.venda).subscribe((res)=>{
      
      if (res.camisetaVendas) {
        this.aprovado = true;
        this.camisetaService.limpaCarrinho();

        this.meioPagamento=true;

        if(this.opcaoPagamento=='pix'){
          this.pix = true;
       }
       else if(this.opcaoPagamento=='cartao'){
        this.cartao = true;

       }
       else{
        this.dataBoleto();
        this.boleto = true;
       }
      }
   
     this.carregar=false;
     
    })
  }


  opcCompra(opcao:string){
    this.opcaoPagamento=opcao;
    if(this.opcaoPagamento=='cartao'){
      if(this.cartao==false){
        this.cartao=true;
      }
      else{
        this.cartao=false;
      }
    }
    
  }


  dataBoleto(){
    const dataAtual = new Date();

    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();

    this.data = `${dia}/${mes}/${ano}`;

  }

   gerarNumeroAleatorio(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  verificarTamanho(event: any, proximoInputId: string): void {
    const input = event.target;
    const valor = input.value;

    if (valor.length === 4 && proximoInputId) {
      const proximoInput = document.getElementById(proximoInputId);

      if (proximoInput) {
        proximoInput.focus();
      }
    }
  }

  
}