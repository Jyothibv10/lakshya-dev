import { Component, OnInit } from '@angular/core';
import { imageList } from 'src/app/cms/shared/imagesList';
import { Router } from '@angular/router';
import { PopoverHelperService } from 'src/app/cms/shared/services/popover-helper.service';
// import { AuthService } from 'src/app/cms/shared/services/auth.service';
import { CourseService } from '../course.service'; 
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogService } from 'src/app/cms/shared/services/confirm-dialog.service'; 

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {

  imageList = imageList;
  constructor(public router: Router,
    public popoverHelperService: PopoverHelperService, private courseService:CourseService,private toastr: ToastrService,private confirmDialogService: ConfirmDialogService) { }
    // public popoverHelperService: PopoverHelperService, private authService: AuthService) { }

    courseData:any = [];
    dtOptions: any = {};
    ngOnInit(): void {
     
      this.courseService.getAllCourse().subscribe((allData:any)=>{
        this.courseData = allData;
        setTimeout(()=>{                          
          $('#datatableexample').DataTable( {
            pagingType: 'full_numbers',
            pageLength: 5,
            processing: true,
            lengthMenu : [5, 10, 25, 50, 100],
            order:[[0,"desc"]],
            retrieve:true,
        } );
        }, 1);
      });
    }
  
  
    deleteCourse(id:number){
      const that:any =this;
      this.confirmDialogService.confirmThis("Are you sure to delete?", function() {  
        // alert("Yes clicked");  

        that.courseService.deleteCourse(id).subscribe((result:any)=>{
          //console.log(result);
          
          that.ngOnInit();
          that.toastr.success("Succefully Deleted!.");
        });


      }, function () {  
        alert("No clicked");  
      })


      console.log(id);
      
    }

    editCourse(id:number){
      this.router.navigateByUrl('/admin/courses/edit/'+id);
    }

    updateCourseStatus(id:number,data:any,status:string){
      
      const b:any = this;
      this.confirmDialogService.confirmThis("Are you sure to update status?", function() {
        data.status = status;
        b.courseService.updateCourseById(id,data).subscribe((result:any)=>{
        //console.log(result);
        
        b.ngOnInit();
        b.toastr.success("Succefully Updated!.");
      });
    }, function () {  
      alert("No clicked");  
    })
    }
 

}
