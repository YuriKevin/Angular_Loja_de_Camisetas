import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CamisetaModule } from 'src/app/modules/camiseta/camiseta.module';
import { ClienteModule } from './modules/cliente/cliente.module';
import { CoreModule } from './core/core.module';
import { VendaModule } from './modules/venda/venda.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CamisetaModule,
    ClienteModule,
    CoreModule,
    VendaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
