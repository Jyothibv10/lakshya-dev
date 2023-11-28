import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

import { ModalHelperService } from './services/modal-helper.service';
import { PopoverHelperService } from './services/popover-helper.service';
import { ConfirmDialogService } from './services/confirm-dialog.service';
import { ConfirmDialogComponent } from '../modules/confirm-dialog/confirm-dialog.component';
@NgModule({
  declarations: [
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
  ] ,
  exports : [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogComponent
  ],
  providers : [
    ModalHelperService,
    PopoverHelperService,
    ConfirmDialogService
  ]
})
export class SharedModule { }
