import { Component, OnInit } from '@angular/core';
import { CamisetaService } from '../camiseta.service';
import { Camiseta } from '../camiseta';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['../edit/edit.component.css', './create.component.css']
})
export class CreateComponent implements OnInit{
  form!: FormGroup;
  carregar:boolean = true;
  imagemFormulario!:string;

  constructor(
    public camisetaService: CamisetaService,
    private router: Router
    ) { }

    ngOnInit(): void {
      this.form = new FormGroup({
      clube: new FormControl('', [Validators.required]),
      pais: new FormControl('', [Validators.required]),
      ano: new FormControl('', Validators.required),
      quantidade: new FormControl('', Validators.required),
      valor: new FormControl('', Validators.required),
      imagem: new FormControl('', Validators.required)
      });
      this.carregar=false;
      }

      get f(){
        return this.form.controls;
      }

      submit(){
        this.carregar=true;
        console.log(this.form.value);
        this.camisetaService.create(this.form.value).subscribe(res => {
          this.carregar=false;
             alert('Camiseta criada com sucesso!');
             this.router.navigateByUrl('details/'+res.id), { target: '_blank' };
        })
      }
        

}
