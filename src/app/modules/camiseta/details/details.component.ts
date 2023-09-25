import { Component, OnInit } from '@angular/core';
import { CamisetaService } from '../camiseta.service';
import { Camiseta } from '../camiseta';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  camisetaId: number = 0;
  camiseta: Camiseta;

  constructor(private route: ActivatedRoute, public camisetaService: CamisetaService) { 
    this.camiseta = {
      id : 0,
      clube: "",
      ano: 0,
      quantidade: 0,
      valor: 1000,
      imagem: ""
    };
  }
  
  ngOnInit(): void {
    

    // Obtém o valor do parâmetro 'id' da rota
    const idParam = this.route.snapshot.paramMap.get('id');
  
    if (idParam !== null) {
      this.camisetaId = +idParam;
      console.log(this.camisetaId);

       this.camisetaService.find(this.camisetaId).subscribe((data: Camiseta)=>{
      this.camiseta = data;
        console.log(this.camiseta);
        })
    }
    else{
     // this.router.navigate(['../home']); ir para home
    }
  }
  




}
