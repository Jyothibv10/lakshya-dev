import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { FormGroup, FormBuilder,FormControl,Validators,AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  submitted = false;
  constructor(private _courseService:CourseService, private fb: FormBuilder,private router: Router,private toastr: ToastrService){}
  
  addCourse:FormGroup = new FormGroup(
    {
      courseName:new FormControl(''),
      board:new FormControl(''),
      year:new FormControl(''),
      status:new FormControl(''),
    }
  );
  message:boolean = false;
  ngOnInit(): void {
    this.addCourse = this.fb.group(
      {
        courseName: ['', Validators.required],
        board: ['', Validators.required],
        year: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
        status: [''],
      });
    
  }
  saveData(){
    return new Promise((resolve, reject) => {
        this.submitted = true;
        console.log(this.addCourse.value);
        if(this.addCourse.valid)
        {
            this._courseService.saveCourse(this.addCourse.value).subscribe({          
              next:(result:any)=>{
                //console.log(result);
                this.message = true;
                this.addCourse.reset({})
                this.toastr.success("Succefully Added!.");
                this.router.navigateByUrl('/admin/courses');
                resolve(result);              
              },
              error: (err: any) => {
                  reject(err);
              }
            });       
        
        }else{
          this.toastr.error("Validation Error!."+this.addCourse.errors);
        }

    });
    //console.log(JSON.stringify(this.addCourse.value, null, 2));
  }

  removeMessage(){
    this.message = false;
  }

  
  get f(): { [key: string]: AbstractControl } {
    return this.addCourse.controls;
  }

  onReset(): void {
    this.submitted = false;
    this.addCourse.reset();
  }

}
