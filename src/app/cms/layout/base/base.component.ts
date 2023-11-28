import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})

export class BaseComponent implements OnInit 
{

  sideBarOpen : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggler()
  {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
