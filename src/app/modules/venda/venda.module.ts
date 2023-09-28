import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendaRoutingModule } from './venda-routing.module';
import { ManagementVendasComponent } from './management-vendas/management-vendas.component';
import { CoreModule } from 'src/app/core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsVendaComponent } from './details-venda/details-venda.component';


@NgModule({
  declarations: [
    ManagementVendasComponent,
    DetailsVendaComponent
  ],
  imports: [
    CommonModule,
    VendaRoutingModule,
    CoreModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class VendaModule { }
