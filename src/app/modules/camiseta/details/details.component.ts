import { Component, OnInit } from '@angular/core';
import { CamisetaService } from '../camiseta.service';
import { Camiseta } from '../camiseta';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id!: number;
  camiseta!: Camiseta;

  constructor(private route: ActivatedRoute, private router: Router, public camisetaService: CamisetaService) { 
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
    
    this.id = this.route.snapshot.params['id'];
  
    if (this.id !== null) {
      console.log(this.id);

       this.camisetaService.find(this.id).subscribe((data: Camiseta)=>{
        this.camiseta = data;
        console.log(this.camiseta);
        })
    }
    else{
      this.router.navigateByUrl('');
    }
  }
  
//&& typeof this.id === 'number'




}
