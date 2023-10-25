import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamisetaRoutingModule } from './camiseta-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { ManagementComponent } from './management/management.component';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { BuyComponent } from './buy/buy.component';
import { TrackingComponent } from './tracking/tracking.component';


@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    ManagementComponent,
    CreateComponent,
    EditComponent,
    SearchComponent,
    ShoppingCartComponent,
    BuyComponent,
    TrackingComponent
  ],
  imports: [
    CommonModule,
    CamisetaRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule
    
  ]
})
export class CamisetaModule { }
