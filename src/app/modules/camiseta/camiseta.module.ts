import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CamisetaRoutingModule } from './camiseta-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from 'src/app/core/header/header.component';
import { FooterComponent } from 'src/app/core/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { ManagementComponent } from './management/management.component';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent, 
    HeaderComponent,
    FooterComponent,
    DetailsComponent,
    ManagementComponent,
    CreateComponent,
    EditComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    CamisetaRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ]
})
export class CamisetaModule { }
