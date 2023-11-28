import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Endpoints } from './.././../core/constants/endpoints';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private router: Router,
    private _http: HttpClient,) {

     }

  login(user: any){
  return this._http.post(Endpoints.LOGIN, user);
  }
}
