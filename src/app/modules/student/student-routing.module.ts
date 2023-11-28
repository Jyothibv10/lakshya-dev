import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStudentComponent } from './list-student/list-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

const routes: Routes = [
  { path : 'student-list' , component : ListStudentComponent},
  { path : 'view-student' , component : ViewStudentComponent},
  { path : 'create-student' , component : CreateStudentComponent},
  { path : 'edit-student' , component : EditStudentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
