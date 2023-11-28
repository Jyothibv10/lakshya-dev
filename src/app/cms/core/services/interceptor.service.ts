import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent,	HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Observable , throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from "@angular/router";
import { environment } from 'src/environments/environment';

@Injectable()

export class InterceptorService implements HttpInterceptor
{
	constructor(public toastrService: ToastrService,
              private router: Router)
  {

	}

	private handleError(error: HttpErrorResponse): Observable<HttpEvent<any>>
  {
    if (error.status === 401)
    {
      // sessionStorage.removeItem('userToken');
      sessionStorage.removeItem('token');
      this.router.navigate(['login']);
    }
    else if(error.status === 404)
    {
      this.toastrService.error(error.error.error);
    }
    else
    {
      if (error.error instanceof ErrorEvent)
      {
        this.toastrService.error(error?.message);
      }
      else if (error.error instanceof ProgressEvent)
      {
        this.toastrService.error(error?.statusText);
      }
    }
    return throwError(()=>error);
  }

  intercept(request : HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
    const clonedReq = this.addToken(request);
    return next.handle(clonedReq).pipe(catchError(this.handleError.bind(this)));
  }

  /* Adds the token to your headers if it exists */
  private addToken(request: HttpRequest<any>)
  {
    let token:any = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI4OTM5Nzk3MjE2IiwiZXhwIjoxNjczNTQ0MDU2LCJpYXQiOjE2NzM1MjYwNTZ9.ZUPFWISVhttU2nleRUGTNLQyYovFf9wuOUGpy_yS2jzcG3NKHhsfz3gZCpttjBkpPxyP9zlt9sONK3sUujjTQQ";
    if(localStorage.getItem('token')) {
      token = localStorage.getItem('token')
    } 
    // else {
    //   token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI5MDAzMjkwMDMyIiwiZXhwIjoxNjcwMzQyNzg1LCJpYXQiOjE2NzAzMjQ3ODV9.Nqps3s4yVGsbX28wyQY5W8moDfA58Qf-CIa3BusIQt1TsJ-d6gXGGhwLM_a4kY59Kn15oib5gQ4-y4z8Zamn7A"
    // }
    let clone = request.clone({
      // setHeaders: {
      //   'Content-Type' : 'application/json',
      //   Authorization : 'Basic ' + window.btoa('admin' + ':' + 'admin')
      // },
      
      headers: request.headers.set("Authorization", "Bearer " + token),
      url: environment.baseUrl + request.url
    });
    return clone
  }
}
