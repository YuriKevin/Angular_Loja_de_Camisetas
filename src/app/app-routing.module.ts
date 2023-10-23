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
import { EditVendasComponent } from './modules/venda/edit-vendas/edit-vendas.component';
import { AddCamisetaComponent } from './modules/venda/add-camiseta/add-camiseta.component';
import { CreateClienteComponent } from './modules/cliente/create-cliente/create-cliente.component';
import { CreateVendaComponent } from './modules/venda/create-venda/create-venda.component';
import { ShoppingCartComponent } from './modules/camiseta/shopping-cart/shopping-cart.component';
import { BuyComponent } from './modules/camiseta/buy/buy.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'details/:id', component: DetailsComponent},
  { path: 'management', component: ManagementComponent},
  { path: 'create', component: CreateComponent},
  { path: 'edit/:id', component: EditComponent},
  { path: 'search/:nome', component: SearchComponent},
  { path: 'search2/:pais', component: SearchComponent},
  { path: 'clientes', component: ManagementClienteComponent},
  { path: 'clientes/create', component: CreateClienteComponent},
  { path: 'clientes/edit/:id', component: EditClienteComponent},
  { path: 'clientes/details/:id', component: DetailsClienteComponent},
  { path: 'vendas', component: ManagementVendasComponent},
  { path: 'vendas/create', component: CreateVendaComponent},
  { path: 'vendas/details/:id', component: DetailsVendaComponent},
  { path: 'vendas/edit/:id', component: EditVendasComponent},
  { path: 'vendas/:id/add_camiseta', component: AddCamisetaComponent},
  { path: 'shopping_cart', component: ShoppingCartComponent},
  { path: 'buy', component: BuyComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
