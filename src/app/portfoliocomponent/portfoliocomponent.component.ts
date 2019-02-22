import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Routes, RouterModule, Router } from '@angular/router';
import { XtremeService } from './../xtreme.service';
@Component({
  selector: 'app-portfoliocomponent',
  templateUrl: './portfoliocomponent.component.html',
  styleUrls: ['./portfoliocomponent.component.css']
})
export class PortfoliocomponentComponent implements OnInit {
  arrayindustries: Array<Object>;
  ID: any;
  arraygallary:Array<{Videos:Array<{ID:any , Name:any , Title:any, Link:any}>}>;
  
  video: any;
  

  constructor(private route: Router, private services: XtremeService, private Dom: DomSanitizer) {
    services.get_Industries().subscribe((res : any)=> {
      this.arrayindustries = res.Response.Industries;
    });
    services.get_Gallery().subscribe((res : any)=> {
      
      this.arraygallary = res.Response.Gallery;
      this.video = this.arraygallary[0].Videos[0].Link
     
      this.video = this.Dom.bypassSecurityTrustResourceUrl( this.video);
      
    });

  }

  ngOnInit() {
  }
  display = function (data) {
    this.ID = data;
    let len = this.arrayindustries.length;
    for (let index = 0; index < this.arrayindustries.length; index++) {
      let id = (this.arrayindustries[index]).ID;
      let val = `img${id}`;
      if (val == data) {
        document.getElementById(val).style.display = 'block';
      }
      else {
        document.getElementById(val).style.display = 'none';
      }
    }
  }
  displayall = function () {
    this.ID = 0;
    let len = this.arrayindustries.length;
    for (let index = 0; index < this.arrayindustries.length; index++) {
      let id = (this.arrayindustries[index]).ID;
      let val = `img${id}`;
      document.getElementById(val).style.display = 'block';
    }
  }

}
