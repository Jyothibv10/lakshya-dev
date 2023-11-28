import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators,AbstractControl} from '@angular/forms';
import { CourseService } from '../course.service';
import { ActivatedRoute,Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  submitted = false;
  constructor(private _courseService:CourseService, private fb: FormBuilder,private actRouter: ActivatedRoute,private router: Router,private toastr: ToastrService){}
  
  editCourse:FormGroup = new FormGroup(
    {
      courseName:new FormControl(''),
      board:new FormControl(''),
      year:new FormControl(''),
      status:new FormControl(''),
    }
  );
  message:boolean = false;
  ngOnInit(): void {

    // console.log(this.actRouter.snapshot.params['id']);
    this._courseService.getCourseById(this.actRouter.snapshot.params['id']).subscribe((res:any)=>{
      console.log(res);
      this.editCourse = new FormGroup({
        courseName:new FormControl( res['courseName']),
        board:new FormControl( res['board']),
        year:new FormControl( res['year']),
        status:new FormControl((res['status'])?res['status']:''),
      })
    });
    
    this.editCourse = this.fb.group(
      {
        courseName: ['', Validators.required],
        board: ['', Validators.required],
        year: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
        status: [''],
      });
    
  }
  updateData(){
    this.submitted = true;
    // console.log(this.editCourse.value);
    this._courseService.updateCourseById(this.actRouter.snapshot.params['id'],this.editCourse.value).subscribe((res:any)=>{
      console.log(res);
      this.message = true;
      this.toastr.success("Succefully Added!.");
      this.router.navigateByUrl('/admin/courses');
    })
    
  }

  removeMessage(){
    this.message = false;
  }

  
  get f(): { [key: string]: AbstractControl } {
    return this.editCourse.controls;
  }

  onReset(): void {
    this.submitted = false;
    this.editCourse.reset();
  }

}
