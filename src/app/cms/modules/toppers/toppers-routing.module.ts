import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTopperComponent } from './list-topper/list-topper.component';
import { AddTopperComponent } from './add-topper/add-topper.component';
import { EditTopperComponent } from './edit-topper/edit-topper.component';

const routes: Routes = [
  {
    path : '' , component : ListTopperComponent,
  },
  {
    path : 'add' , component : AddTopperComponent,
  },
  {
    path : 'edit/:id' , component : EditTopperComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToppersRoutingModule { }
