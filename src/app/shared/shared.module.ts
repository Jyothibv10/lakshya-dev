import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

// import { ModalHelperService } from './services/modal-helper.service';
// import { PopoverHelperService } from './services/popover-helper.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ] ,
  exports : [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers : [
    // ModalHelperService,
    // PopoverHelperService
  ]
})
export class SharedModule { }
