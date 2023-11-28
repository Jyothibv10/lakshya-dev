import { Injectable } from '@angular/core';
import { Endpoints } from './.././../core/constants/endpoints';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ToppersService {

  constructor(private http:HttpClient) { }

  getAllTopper(){
    return this.http.get(Endpoints.TOPPER);
  }

  saveTopper(data:any){
    return this.http.post(Endpoints.TOPPER,data);
  }

  deleteTopper(id:any){
    return this.http.delete(Endpoints.TOPPER+'/'+`${id}`);
  }

  getTopperById(id:number){
    return this.http.get(Endpoints.TOPPER+'/'+`${id}`);
  }

  updateTopperById(id:number,data:any){
    return this.http.put(Endpoints.TOPPER+'/'+`${id}`,data);
  }

  updateTopperStatus(id:number,data:any,status:string){
    return this.http.put(Endpoints.TOPPER+'/'+`${id}`,data);
  }
}
