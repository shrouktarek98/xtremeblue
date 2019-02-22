import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { XtremeService } from './../xtreme.service';
import { FormsModule } from '@angular/forms'
import { concat } from 'rxjs';
@Component({
  selector: 'app-contactcomponent',
  templateUrl: './contactcomponent.component.html',
  styleUrls: ['./contactcomponent.component.css']
})
export class ContactcomponentComponent implements OnInit {
  dataa : any
  constructor(private route: Router,private services:XtremeService) { }
  ngOnInit() {
  }
  submit =function(data){
    
    this.services.insert_Contact(data).subscribe((res : any)=>{
      this.dataa = data
      res = this.dataa;
    });
  }
}
