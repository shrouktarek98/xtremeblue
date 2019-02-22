import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { XtremeService } from './xtreme.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutcomponentComponent } from './aboutcomponent/aboutcomponent.component';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { FoottercomponentComponent } from './foottercomponent/foottercomponent.component';
import { ContactcomponentComponent } from './contactcomponent/contactcomponent.component';
import { ElementscomponentComponent } from './elementscomponent/elementscomponent.component';
import { PortfoliocomponentComponent } from './portfoliocomponent/portfoliocomponent.component';
import { ServicscomponentComponent } from './servicscomponent/servicscomponent.component';
import { ProductComponent } from './product/product.component';
import { SupplierComponent } from './supplier/supplier.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    AboutcomponentComponent,
    HeadercomponentComponent,
    FoottercomponentComponent,
    ContactcomponentComponent,
    ElementscomponentComponent,
    PortfoliocomponentComponent,
    ServicscomponentComponent,
    ProductComponent,
    SupplierComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [XtremeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
