import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmsLoginComponent } from './cms-login/cms-login.component';
import { BaseComponent } from '../../layout/base/base.component';

const routes: Routes = [
  { path : '' , redirectTo : 'login' , pathMatch : 'full'},
  { path: 'login', component: CmsLoginComponent },
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path : 'dashboard',
        loadChildren : () => import('../../modules/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path : 'courses',
        loadChildren : () => import('../../modules/courses/courses.module').then((m) => m.CoursesModule)
      },
      {
        path : 'toppers',
        loadChildren : () => import('../../modules/toppers/toppers.module').then((m) => m.ToppersModule)
      },
    ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
