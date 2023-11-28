import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BaseComponent } from './base/base.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BaseComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    SidebarComponent,
    HeaderComponent,
    BaseComponent
  ],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutModule { }
