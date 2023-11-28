import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ErrorPageComponent } from './error-page.component';

@NgModule({
  declarations: [
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class ErrorModule { }
