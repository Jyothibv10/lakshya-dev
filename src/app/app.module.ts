import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorPageComponent } from './cms/modules/error-page/error-page.component';
import { BaseComponent } from './ui/layout/base/base.component';
import { ToastrModule } from 'ngx-toastr';
import {  HttpClientModule } from '@angular/common/http';
import { CoreModule } from './../../src/app/cms/core/core.module';
import { LayoutModule } from './cms/layout/layout.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule} from 'angular-datatables';



@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    BaseComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'toast-top-right' }),
    HttpClientModule,
    CoreModule,
    LayoutModule,
    NgbModule,
    DataTablesModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
