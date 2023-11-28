import { Component,OnInit } from '@angular/core';
import { imageList } from 'src/app/cms/shared/imagesList';
import { Router } from '@angular/router';
import { PopoverHelperService } from 'src/app/cms/shared/services/popover-helper.service';
// import { AuthService } from 'src/app/cms/shared/services/auth.service';
import { ToppersService } from '../toppers.service';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogService } from 'src/app/cms/shared/services/confirm-dialog.service'; 

@Component({
  selector: 'app-list-topper',
  templateUrl: './list-topper.component.html',
  styleUrls: ['./list-topper.component.css']
})
export class ListTopperComponent implements OnInit {
  imageList = imageList;
  constructor(public router: Router,
  // public popoverHelperService: PopoverHelperService, private topperService: ToppersService,private toastr: ToastrService) { }
  public popoverHelperService: PopoverHelperService, private topperService: ToppersService,private toastr: ToastrService,private confirmDialogService: ConfirmDialogService) { }
  // public popoverHelperService: PopoverHelperService, private authService: AuthService) { }

  toppersData:any = [];
  dtOptions: any = {};
  ngOnInit(): void {
   
    this.topperService.getAllTopper().subscribe((allData:any)=>{
      this.toppersData = allData;
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


  deleteTopper(id:number){
    const that:any =this;
    this.confirmDialogService.confirmThis("Are you sure to delete?", function() {  
        that.topperService.deleteTopper(id).subscribe((result:any)=>{        
        that.ngOnInit();
        that.toastr.success("Succefully Deleted!.");
      });
    }, function () {  
      alert("No clicked");  
    })
    
  }

  editTopper(id:number){
    this.router.navigateByUrl('/admin/toppers/edit/'+id);
  }

  updateTopperStatus(id:number,data:any,status:string){
    
    const b:any = this;
    this.confirmDialogService.confirmThis("Are you sure to update status?", function() {
      data.status = status;
      b.topperService.updateTopperById(id,data).subscribe((result:any)=>{
      //console.log(result);
      
      b.ngOnInit();
      b.toastr.success("Succefully Updated!.");
    });
  }, function () {  
    alert("No clicked");  
  })
  }



}
