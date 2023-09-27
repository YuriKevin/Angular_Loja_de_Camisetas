import { Component, OnInit } from '@angular/core';
import { CamisetaService } from '../camiseta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Camiseta } from '../camiseta';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id!: number;
  camiseta!: Camiseta;
  form!: FormGroup;
  imagem!: string;


  constructor(
    public camisetaService: CamisetaService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
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
    if (this.id !== null) {

      this.id = this.route.snapshot.params['id'];
      this.camiseta.id = this.id;
      this.camisetaService.find(this.id).subscribe((data: Camiseta)=>{
      this.camiseta = data;


      });
    }
    else{
      this.router.navigateByUrl('');
      
    }
    this.form = new FormGroup({
      clube: new FormControl('', [Validators.required]),
      ano: new FormControl('', Validators.required),
      quantidade: new FormControl('', Validators.required),
      valor: new FormControl('', Validators.required),
      imagem: new FormControl('', Validators.required)
    });
  }

 
  get f(){
    return this.form.controls;
  }
    
  submit(){
    console.log(this.form.value);
    this.camiseta.clube = this.form.value.clube;
    this.camiseta.ano = this.form.value.ano;
    this.camiseta.quantidade = this.form.value.quantidade;
    this.camiseta.valor = this.form.value.valor;
    this.camiseta.imagem = this.form.value.imagem;
      this.camisetaService.update(this.camiseta).subscribe(res => {
        console.log('Camiseta atualizada com sucesso!');
        this.router.navigateByUrl('details/'+this.camiseta.id), { target: '_blank' };
    })
  }

  
}
