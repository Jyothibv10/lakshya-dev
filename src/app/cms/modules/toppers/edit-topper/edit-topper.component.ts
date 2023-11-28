import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators,AbstractControl} from '@angular/forms';
import { ToppersService } from '../toppers.service'; 
import { ActivatedRoute,Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FileUploadService } from 'src/app/cms/shared/services/file-upload.service'; 
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-edit-topper',
  templateUrl: './edit-topper.component.html',
  styleUrls: ['./edit-topper.component.css']
})
export class EditTopperComponent implements OnInit{
  imageSrc: string = '';

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  preview = '';

  imageInfos?: Observable<any>;


  submitted = false;
  constructor(private _topperService:ToppersService, private fb: FormBuilder,private actRouter: ActivatedRoute,private router: Router,private toastr: ToastrService, private _uploadService: FileUploadService){}
  
  editTopper:FormGroup = new FormGroup(
    {
      topperName:new FormControl(''),
      board:new FormControl(''),
      year:new FormControl(''),
      status:new FormControl(''),
    }
  );
  // message:boolean = false;
  ngOnInit(): void {

    // console.log(this.actRouter.snapshot.params['id']);
    this._topperService.getTopperById(this.actRouter.snapshot.params['id']).subscribe((res:any)=>{
      console.log(res);
      this.editTopper = new FormGroup({
        studentName:new FormControl( res['studentName']),
        images:new FormControl( res['images']),
        percentage:new FormControl( res['percentage']),
        overview:new FormControl( res['overview']),
        status:new FormControl((res['status'])?res['status']:''),
      })
    });
    
    this.editTopper = this.fb.group(
      {
        studentName: ['', Validators.required],
        images: ['', Validators.required],
        percentage: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
        overview: ['', Validators.required],
        status: [''],
      });
    
  }
  updateData(){
    this.submitted = true;
    
    this._topperService.updateTopperById(this.actRouter.snapshot.params['id'],this.editTopper.value).subscribe((res:any)=>{
      console.log(res);
      // this.message = true;
      this.toastr.success("Succefully Added!.");
      this.router.navigateByUrl('/admin/toppers');
    })
    
  }

  removeMessage(){
    // this.message = false;
  }

  
  get f(): { [key: string]: AbstractControl } {
    return this.editTopper.controls;
  }

  onReset(): void {
    this.submitted = false;
    this.editTopper.reset();
  }

  onFileChange(event:any) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
   
        this.imageSrc = reader.result as string;
     
        this.editTopper.patchValue({
          fileSource: reader.result as string
        });
   
      };
   
    }
  }

  selectFile(event: any): void {
    this.message = '';
    this.preview = '';
    this.progress = 0;
    this.selectedFiles = event.target.files;
  
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
  
      if (file) {
        this.preview = '';
        this.currentFile = file;
  
        const reader = new FileReader();
  
        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.preview = e.target.result;
        };
  
        reader.readAsDataURL(this.currentFile);
      }
    }
  }

  upload(): void {
    this.progress = 0;
  
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
  
      if (file) {
        this.currentFile = file;
  
        this._uploadService.upload(this.currentFile).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round((100 * event.loaded) / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.imageInfos = this._uploadService.getFiles();
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;
  
            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the image!';
            }
  
            this.currentFile = undefined;
          },
        });
      }
  
      this.selectedFiles = undefined;
    }
  }


}
