import { Component, OnInit } from '@angular/core';
import { ToppersService } from '../toppers.service';
import { FormGroup, FormBuilder,FormControl,Validators,AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileUploadService } from 'src/app/cms/shared/services/file-upload.service'; 


@Component({
  selector: 'app-add-topper',
  templateUrl: './add-topper.component.html',
  styleUrls: ['./add-topper.component.css']
})
export class AddTopperComponent implements OnInit {
  imageSrc: string = '';
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  preview = '';

  imageInfos?: Observable<any>;


  submitted = false;
  constructor(private _topperService:ToppersService, private fb: FormBuilder,private router: Router,private toastr: ToastrService, private _uploadService: FileUploadService){}
  
  addTopper:FormGroup = new FormGroup(
    {
      studentName:new FormControl(''),
      images:new FormControl(''),
      percentage:new FormControl(''),
      overview:new FormControl(''),
      status:new FormControl(''),
    }
  );
  // message:boolean = false;
  ngOnInit(): void {
    this.addTopper = this.fb.group(
      {
        studentName: ['', Validators.required],
        images: ['', Validators.required],
        percentage: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
        overview: ['', Validators.required],
        status: [''],        
      });

      this.imageInfos = this._uploadService.getFiles();
    
  }
  saveData(){
    return new Promise((resolve, reject) => {
        this.submitted = true;
        console.log(this.addTopper.value);
        if(this.addTopper.valid)
        {
            this._topperService.saveTopper(this.addTopper.value).subscribe({          
              next:(result:any)=>{
                //console.log(result);
                // this.message = true;
                this.addTopper.reset({})
                this.toastr.success("Succefully Added!.");
                this.router.navigateByUrl('/admin/toppers');
                resolve(result);              
              },
              error: (err: any) => {
                  reject(err);
              }
            });       
        
        }else{
          this.toastr.error("Validation Error!."+this.addTopper.errors);
        }

    });
    
  }

  removeMessage(){
    // this.message = false;
  }

  
  get f(): { [key: string]: AbstractControl } {
    return this.addTopper.controls;
  }

  onReset(): void {
    this.submitted = false;
    this.addTopper.reset();
  }

  onFileChange(event:any) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
   
        this.imageSrc = reader.result as string;
     
        this.addTopper.patchValue({
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
