import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { XtremeService } from './../xtreme.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  arrayproducts:Array<Object>;
  constructor(private route: Router,private services:XtremeService) { 
    services.get_products().subscribe((res : any)=>{
      this.arrayproducts=res.Response.Products;
    });
  }

  ngOnInit() {
  }

}
