import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { XtremeService } from './../xtreme.service';
@Component({
  selector: 'app-foottercomponent',
  templateUrl: './foottercomponent.component.html',
  styleUrls: ['./foottercomponent.component.css']
})
export class FoottercomponentComponent implements OnInit {

  
  arraycontact:Array<Object>;
  constructor(private route: Router,private services:XtremeService) { 
    services.get_Contact().subscribe((res:any) =>{ 
      this.arraycontact=res.Response.ContactInfo;
    });
  }
  ngOnInit() {
  }

}
