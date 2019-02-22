import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-elementscomponent',
  templateUrl: './elementscomponent.component.html',
  styleUrls: ['./elementscomponent.component.css']
})
export class ElementscomponentComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

}
