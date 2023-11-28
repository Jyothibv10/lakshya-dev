import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { imageList } from '../../../cms/shared/imagesList';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit 
{
  imageList = imageList;
  @Input() sideBarOpen : any;
  @Output() sideBar : EventEmitter<any> = new EventEmitter();

  constructor() 
  { 

  }

  ngOnInit(): void {
  }

  toggleSidebar()
  {
    this.sideBar.emit();
  }

}
