import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/camiseta/home/home.component';
import { DetailsComponent } from './modules/camiseta/details/details.component';
import { ManagementComponent } from './modules/camiseta/management/management.component';
import { CreateComponent } from './modules/camiseta/create/create.component';
import { EditComponent } from './modules/camiseta/edit/edit.component';
import { SearchComponent } from './modules/camiseta/search/search.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'details/:id', component: DetailsComponent},
  { path: 'management', component: ManagementComponent},
  { path: 'create', component: CreateComponent},
  { path: 'edit/:id', component: EditComponent},
  { path: 'search/:nome', component: SearchComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
