import { Component, OnInit } from '@angular/core';
import { CamisetaService } from '../camiseta.service';
import { Camiseta } from '../camiseta';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  form!: FormGroup;

  constructor(
    public camisetaService: CamisetaService,
    private router: Router
    ) { }

    ngOnInit(): void {
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
        this.camisetaService.create(this.form.value).subscribe(res => {

             alert('Camiseta criada com sucesso!');
             this.router.navigateByUrl('details/'+res.id), { target: '_blank' };
        })
      }
        

}
