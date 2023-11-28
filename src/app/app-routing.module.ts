import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './cms/modules/error-page/error-page.component';
import { BaseComponent } from './ui/layout/base/base.component';
// import { BaseComponent } from './cms/layout/base/base.component';
const routes: Routes = [  
  {
    path: '',
    component: BaseComponent
  },
  {
    path : 'error',
    component: ErrorPageComponent
  },
  {
    path : 'admin',
    loadChildren: () => 
      import('./cms/modules/auth/auth.module').then(
        (m) => m.AuthModule
        ),
  }, 
  { 
    path: '**',
    redirectTo: 'error',
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
