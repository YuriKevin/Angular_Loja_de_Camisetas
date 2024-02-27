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
        this.form.patchValue({
          imagem: this.imagemFormulario
        });
        console.log(this.form.value);
        this.camisetaService.create(this.form.value).subscribe({
          next: (data:Camiseta) => {
            this.carregar=false;
            alert('Camiseta criada com sucesso!');
            this.router.navigateByUrl('details/'+data.id), { target: '_blank' };
          },
          error: (error) => {
            this.carregar=false;
            alert('Erro ao criar a camiseta.');
          }
        })
      }
      handleFileInput(event: Event): void {
        const inputElement = event.target as HTMLInputElement;
        const files = inputElement?.files;
        if (files && files.length > 0) {
          const file = files[0];
          if (this.isImageFile(file)) {
            this.readFileAsBase64(file);
          } else {
            console.log("O arquivo selecionado não é uma imagem.");
          }
        }
      }
    
      isImageFile(file: File): boolean {
        return file.type.startsWith('image/');
      }
    
      readFileAsBase64(file: File): void {
        const reader = new FileReader();
        reader.onload = () => {
          this.imagemFormulario = reader.result as string;
          console.log(this.imagemFormulario);
        };
        reader.readAsDataURL(file);
      }
        

}
