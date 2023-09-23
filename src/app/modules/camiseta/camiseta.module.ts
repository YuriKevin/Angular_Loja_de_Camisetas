import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CamisetaRoutingModule } from './camiseta-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from 'src/app/core/header/header.component';
import { FooterComponent } from 'src/app/core/footer/footer.component';


@NgModule({
  declarations: [
    HomeComponent, 
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CamisetaRoutingModule
  ]
})
export class CamisetaModule { }
