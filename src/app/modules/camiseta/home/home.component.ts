import { Component, OnInit } from '@angular/core';
import { CamisetaService } from '../camiseta.service';
import { Camiseta } from '../camiseta';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  opcaoSelecionada!: string;
  camisetas: Camiseta[] = [];
  camisetasFiltradas: Camiseta[] = [];
  carregar:boolean = true;

  imagens:string[] = [];
  imagemAtualIndex: number = 0;

  paises = [
  { nome: 'Seleções', imagem: '../../../../assets/images/neymar_home.png', nomeBusca: 'Seleção' },
  { nome: 'Europa', imagem: '../../../../assets/images/lautaro_home.png', nomeBusca: 'Europa' },
  { nome: 'Espanhol', imagem: '../../../../assets/images/bellingham_home.png', nomeBusca: 'Espanha' },
  { nome: 'Inglês', imagem: '../../../../assets/images/bruno_home.png', nomeBusca: 'Inglaterra' },
  { nome: 'Brasileirão', imagem: '../../../../assets/images/suarez_home.png', nomeBusca: 'Brasil' },
  { nome: 'Francês', imagem: '../../../../assets/images/mbappe_home.png', nomeBusca: 'França' },
  { nome: 'Sauditão', imagem: '../../../../assets/images/cr7_home.png', nomeBusca: 'arabia saudita' },
  { nome: 'Italiano', imagem: '../../../../assets/images/rafael_home.png', nomeBusca: 'Italia' },
  { nome: 'Alemão', imagem: '../../../../assets/images/kimmich_home.png', nomeBusca: 'Alemanha' }
  ];

  indicePaises = 0;
  contadorPaises = 0
  passadorEsquerda = false;
  passadorDireita = true;

  addContadorPaises() {
    this.indicePaises += 1;
    if(this.indicePaises==this.paises.length-5){
      this.passadorDireita = false;
    }
    else{
      this.passadorDireita = true;
    }
    this.passadorEsquerda = true;
   
  }
  removeContadorPaises() {
    this.indicePaises -= 1;
    if(this.indicePaises==0){
      this.passadorEsquerda = false;
    }
    else{
      this.passadorEsquerda = true;
    }
    this.passadorDireita = true;
   
  }
  
  

  constructor(public camisetaService: CamisetaService) { 
    this.opcaoSelecionada = 'Todas';
    this.imagens = [
      '../../../../assets/images/home_picture.jpeg',
      '../../../../assets/images/home_picture2.jpeg',
      '../../../../assets/images/home_picture3.jpeg',
    ];
  }

  

  ngOnInit(): void {
    this.camisetaService.getCamisetas().subscribe((data: Camiseta[])=>{
    this.camisetas = data;
    this.camisetasFiltradas = this.camisetas;
    this.carregar=false;
    
    
    })
    }
    
    mostrarProximaImagem() {
      this.imagemAtualIndex = (this.imagemAtualIndex + 1) % this.imagens.length;
    }
    
    mostrarImagemAnterior() {
      this.imagemAtualIndex = (this.imagemAtualIndex - 1 + this.imagens.length) % this.imagens.length;
    }

    selecaoAlterada() {
      let opcao = this.opcaoSelecionada;
  
      switch (opcao) {
        case 'Todas':
        this.camisetasFiltradas = this.camisetas;
        break;

        case 'Home':
          this.camisetasFiltradas =[];
          this.camisetas.forEach(camiseta => {
            if (camiseta.clube.toLowerCase().includes('home')) {
              this.camisetasFiltradas.push(camiseta);
            }
          });
        
          break;

        case 'Away':
          this.camisetasFiltradas =[];
          this.camisetas.forEach(camiseta => {
            if (camiseta.clube.toLowerCase().includes('away')) {
              this.camisetasFiltradas.push(camiseta);
            }
          });

          break;

        case 'Fan':
          this.camisetasFiltradas =[];
          this.camisetas.forEach(camiseta => {
            if (camiseta.clube.toLowerCase().includes('fan')) {
              this.camisetasFiltradas.push(camiseta);
            }
          });

          break;

          case 'Goalkeeper':
          this.camisetasFiltradas =[];
          this.camisetas.forEach(camiseta => {
            if (camiseta.clube.toLowerCase().includes('goalkeeper')) {
              this.camisetasFiltradas.push(camiseta);
            }
          });

          break;

        case 'Special':
          this.camisetasFiltradas =[];
          this.camisetas.forEach(camiseta => {
            if (camiseta.clube.toLowerCase().includes('special')) {
              this.camisetasFiltradas.push(camiseta);
            }
          });

          break;

        default:
          this.camisetasFiltradas = this.camisetas;
      }
    }

   
}
