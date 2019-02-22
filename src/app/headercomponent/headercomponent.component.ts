import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { XtremeService } from './../xtreme.service';

@Component({
  selector: 'app-headercomponent',
  templateUrl: './headercomponent.component.html',
  styleUrls: ['./headercomponent.component.css']
})
export class HeadercomponentComponent implements OnInit {

  arraycontact:Array<{SocialMediaLink:Array<{ID:any , Type:any , Link:any}>}>;
  constructor(private route: Router,private services:XtremeService) { 
    this.arraycontact = [] ; 
    services.get_Contact().subscribe((res : any)=>{
      this.arraycontact=res.Response.ContactInfo[0];
    });

  }
  displaylink = function(){
    document.getElementById("supplier").style.display="inline-block";
    document.getElementById("product").style.display="inline-block";
  }
  hidelink = function(){
    document.getElementById("supplier").style.display="none";
    document.getElementById("product").style.display="none";
  }

  ngOnInit() {
  }

}
