import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BaseComponent } from './base/base.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    BaseComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports : [
    SidebarComponent,
    HeaderComponent,
    BaseComponent
  ],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutModule { }
