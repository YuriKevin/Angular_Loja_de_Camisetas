import { Component, OnInit } from '@angular/core';
import { CamisetaService } from '../camiseta.service';
import { Camiseta } from '../camiseta';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  camisetas: Camiseta[] = [];

  constructor(public camisetaService: CamisetaService) { }

  ngOnInit(): void {
    this.camisetaService.getCamisetas().subscribe((data: Camiseta[])=>{
    this.camisetas = data;
    console.log(this.camisetas);
    })
    }

}
