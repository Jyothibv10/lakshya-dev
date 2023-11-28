import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth.guard';

import { HttpHelperService } from './services/http-helper.service';
import { InterceptorService } from './services/interceptor.service';
import { HTTP_INTERCEPTORS , HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers : [
    AuthGuard,
    HttpHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    }
  ]
})
export class CoreModule { }
