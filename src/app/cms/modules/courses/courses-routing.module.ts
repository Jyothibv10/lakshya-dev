import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCourseComponent } from './list-course/list-course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';

const routes: Routes = [
  {
    path : '' , component : ListCourseComponent,
  },
  {
    path : 'add' , component : AddCourseComponent,
  },
  {
    path : 'edit/:id' , component : EditCourseComponent,
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
