import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ManagementClienteComponent } from './management-cliente/management-cliente.component';
import { CoreModule } from 'src/app/core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EditClienteComponent } from './edit-cliente/edit-cliente.component';
import { DetailsClienteComponent } from './details-cliente/details-cliente.component';

@NgModule({
  declarations: [
    ManagementClienteComponent,
    EditClienteComponent,
    DetailsClienteComponent,
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    CoreModule,
    HttpClientModule,
    ReactiveFormsModule

  ]
})
export class ClienteModule { }
