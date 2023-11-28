import { Component,OnInit,ElementRef,ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { imageList } from './../../../shared/imagesList';
import { Router } from '@angular/router';
import { AuthService } from './../../../shared/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-cms-login',
  templateUrl: './cms-login.component.html',
  styleUrls: ['./cms-login.component.css']
})
export class CmsLoginComponent implements OnInit {
  loginForm!: FormGroup;
  passwordType: string = 'password';
  imageList = imageList;
  passwordIcon: string = imageList.eye_on;
  

  @ViewChild('password') password!: ElementRef;
  public eyeView: boolean = false;

  constructor(public router : Router,  private authService: AuthService, private toastr: ToastrService) 
  // constructor(private authService: AuthService)
  { 

  }

  hideShowPassword() 
  {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === imageList.eye_on ? imageList.eye_off : imageList.eye_on;
  }

  ngOnInit(): void 
  {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email,Validators.maxLength(40)]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12),
        Validators.pattern(
          '^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%*!^&+=]).*$'
        ),
      ]),
      remember: new FormControl(),
    });
  }

  passwordToggleShow() {
    this.eyeView = !this.eyeView;
    let fieldType = this.password.nativeElement.type;

    if (fieldType == 'text') {
      this.password.nativeElement.type = 'password';
    } else {
      this.password.nativeElement.type = 'text';
    }
  }

  onSubmit()
  {
    console.log( this.loginForm.value)
    // this.router.navigateByUrl('/dashboard');
    let finalObj = {
      "countryCode": "+91",
      "customerId": this.loginForm.value.email,
      "password": this.loginForm.value.password
    }
    this.authService.login( finalObj).pipe(first()).subscribe(
      (res:any) => {
        if (res) {
          if (res.status == 'Success' || res.statusCode == 200) {
            console.log(res, 'resiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
           
           
            if(res.token){
              localStorage.setItem('token', res.token);
              // localStorage.setItem('token', JSON.stringify({token:res.token}));
            }
            this.toastr.success(res.message);
            // this.router.navigateByUrl('/dashboard');
          }
          else if (res.status == 'FAILURE' || res.statusCode == 404) {

            this.toastr.warning(res.message);
          } else {
            this.toastr.error(res.message);
          }
        }
      },
      (error:any) => {
        console.log(error, 'error');
        if(error.error  && error.error.message) {

          this.toastr.warning(error.error.message);
        }
        else if(error.message) {
          this.toastr.warning(error.message);
        }
        else {
          this.toastr.warning(error);
        }
      }
    );
  }

}
