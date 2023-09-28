import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/camiseta/home/home.component';
import { DetailsComponent } from './modules/camiseta/details/details.component';
import { ManagementComponent } from './modules/camiseta/management/management.component';
import { CreateComponent } from './modules/camiseta/create/create.component';
import { EditComponent } from './modules/camiseta/edit/edit.component';
import { SearchComponent } from './modules/camiseta/search/search.component';
import { ManagementClienteComponent } from './modules/cliente/management-cliente/management-cliente.component';
import { EditClienteComponent } from './modules/cliente/edit-cliente/edit-cliente.component';
import { DetailsClienteComponent } from './modules/cliente/details-cliente/details-cliente.component';
import { ManagementVendasComponent } from './modules/venda/management-vendas/management-vendas.component';
import { DetailsVendaComponent } from './modules/venda/details-venda/details-venda.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'details/:id', component: DetailsComponent},
  { path: 'management', component: ManagementComponent},
  { path: 'create', component: CreateComponent},
  { path: 'edit/:id', component: EditComponent},
  { path: 'search/:nome', component: SearchComponent},
  { path: 'clientes', component: ManagementClienteComponent},
  { path: 'clientes/edit/:id', component: EditClienteComponent},
  { path: 'clientes/details/:id', component: DetailsClienteComponent},
  { path: 'vendas', component: ManagementVendasComponent},
  { path: 'vendas/details/:id', component: DetailsVendaComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
