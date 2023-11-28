import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToppersRoutingModule } from './toppers-routing.module';

import { AddTopperComponent } from './add-topper/add-topper.component';
import { EditTopperComponent } from './edit-topper/edit-topper.component';
import { ListTopperComponent } from './list-topper/list-topper.component';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    AddTopperComponent,
    EditTopperComponent,
    ListTopperComponent,
    
  ],
  imports: [
    CommonModule,
    ToppersRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports:[],
  providers:[],
})
export class ToppersModule { }
