import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from './.././../core/constants/endpoints';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }

  getAllCourse(){
    return this.http.get(Endpoints.COURSE);
  }

  saveCourse(data:any){
    return this.http.post(Endpoints.COURSE,data);
  }

  deleteCourse(id:any){
    return this.http.delete(Endpoints.COURSE+'/'+`${id}`);
  }

  getCourseById(id:number){
    return this.http.get(Endpoints.COURSE+'/'+`${id}`);
  }

  updateCourseById(id:number,data:any){
    return this.http.put(Endpoints.COURSE+'/'+`${id}`,data);
  }

  updateCourseStatus(id:number,data:any,status:string){
    return this.http.put(Endpoints.COURSE+'/'+`${id}`,data);
  }
}
