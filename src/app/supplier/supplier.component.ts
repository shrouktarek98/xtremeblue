import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { XtremeService } from './../xtreme.service';
@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  arraysuppliers:Array<Object>;
  constructor(private route: Router,private services:XtremeService) { 
    services.get_Suppliers().subscribe((res : any)=>{
      this.arraysuppliers=res.Response.Suppliers;
    });
  }

  ngOnInit() {
  }

}
