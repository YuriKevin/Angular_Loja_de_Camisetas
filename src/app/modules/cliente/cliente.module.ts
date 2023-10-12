import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ManagementClienteComponent } from './management-cliente/management-cliente.component';
import { CoreModule } from 'src/app/core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EditClienteComponent } from './edit-cliente/edit-cliente.component';
import { DetailsClienteComponent } from './details-cliente/details-cliente.component';
import { CreateClienteComponent } from './create-cliente/create-cliente.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ManagementClienteComponent,
    EditClienteComponent,
    DetailsClienteComponent,
    CreateClienteComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    CoreModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class ClienteModule { }
