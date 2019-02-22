import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactcomponentComponent } from './contactcomponent/contactcomponent.component';
import {  AboutcomponentComponent } from './aboutcomponent/aboutcomponent.component';
import { ElementscomponentComponent } from './elementscomponent/elementscomponent.component';
import { PortfoliocomponentComponent } from './portfoliocomponent/portfoliocomponent.component';
import { ServicscomponentComponent } from './servicscomponent/servicscomponent.component';
import { ProductComponent } from './product/product.component';
import { SupplierComponent } from './supplier/supplier.component';
const routes: Routes = [
  
  {path: '', component: PortfoliocomponentComponent},
  {path: 'about', component: AboutcomponentComponent },
  {path: 'contact', component: ContactcomponentComponent },
  {path: 'element', component: ElementscomponentComponent },
  {path: 'protflio', component: PortfoliocomponentComponent },
  {path: 'servics', component: ServicscomponentComponent },
  {path: 'product', component: ProductComponent},
  {path: 'supplier',component: SupplierComponent},
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes , {useHash:true , scrollPositionRestoration:"enabled"})
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
