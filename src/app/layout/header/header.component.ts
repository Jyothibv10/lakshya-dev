import { Component,Input,Output,EventEmitter } from '@angular/core';
import { imageList } from 'src/app/shared/imagesList';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

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
