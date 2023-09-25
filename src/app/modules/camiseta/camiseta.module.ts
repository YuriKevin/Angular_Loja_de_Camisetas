import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CamisetaRoutingModule } from './camiseta-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from 'src/app/core/header/header.component';
import { FooterComponent } from 'src/app/core/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    HomeComponent, 
    HeaderComponent,
    FooterComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    CamisetaRoutingModule,
    HttpClientModule
  ]
})
export class CamisetaModule { }
