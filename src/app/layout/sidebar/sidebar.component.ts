import { Component, OnInit } from '@angular/core';
import { menuList } from '../menuList';
import { imageList } from 'src/app/shared/imagesList';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit
{
  menuList = menuList;
  imageList = imageList;
  activeLink : any ;

  constructor(public router : Router) 
  { 
    
  }

  ngOnInit(): void 
  {

  }

  moveToPage(routeLink:any)
  {
    this.activeLink = routeLink;
    this.router.navigateByUrl(routeLink);
  }
}
