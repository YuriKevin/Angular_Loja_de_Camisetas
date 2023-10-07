import { Component, OnInit } from '@angular/core';
import { CamisetaService } from '../camiseta.service';
import { Camiseta } from '../camiseta';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  camisetas: Camiseta[] = [];
  nome!:string;

  constructor(public camisetaService: CamisetaService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.nome = params.get('nome') || '';

      if (this.nome !== '') {
        console.log(this.nome);

        this.camisetaService.findByClub(this.nome).subscribe((data: Camiseta[]) => {
          this.camisetas = data;
          console.log(this.camisetas);
        });
      } else {
        this.router.navigateByUrl('');
      }
    });
    
    }
}