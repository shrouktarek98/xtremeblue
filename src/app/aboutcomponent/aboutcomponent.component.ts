import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { XtremeService } from './../xtreme.service';
@Component({
  selector: 'app-aboutcomponent',
  templateUrl: './aboutcomponent.component.html',
  styleUrls: ['./aboutcomponent.component.css']
})
export class AboutcomponentComponent implements OnInit {
  abouts:any;
  response:any;
  arrayabout:Array<{ID:number, AboutText:string, MissionText:string}>;
  constructor(private route: Router,private services:XtremeService) {
    services.get_about().subscribe(res=>{
      this.abouts=res
      this.response=(this.abouts).Response;
      this.arrayabout= (this.response).About;
    });
     
   
  }
  
  
  ngOnInit() {
  }

}
