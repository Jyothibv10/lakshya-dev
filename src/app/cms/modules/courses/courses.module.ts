import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { CoursesRoutingModule } from './courses-routing.module';

import { AddCourseComponent } from './add-course/add-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { ListCourseComponent } from './list-course/list-course.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    AddCourseComponent,
    EditCourseComponent,
    ListCourseComponent,

  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports:[],
  providers:[],
})
export class CoursesModule { }
