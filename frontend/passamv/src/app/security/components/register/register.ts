import { Component, OnInit } from '@angular/core';
import { Header } from '../header/header';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { Auth } from '../../service/auth/auth';
import { RequestRegistration } from '../../dto/request-registration';
import { CommonModule } from '@angular/common';
import { ResponseData } from '../../dto/response-data';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  imports: [Header, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register implements OnInit {

  registerForm!: FormGroup;
  buttonRegister = true;
  titleLogin = "login"
  private registrationData : RequestRegistration;

  constructor(
    private router: Router,
    private authService: Auth
  ) {
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      secondName: new FormControl('', []),
      firstLastname: new FormControl('', [Validators.required]),
      secondLastname: new FormControl('', []),
      email:new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      repeatPassword: new FormControl('', [Validators.required])
    }, {
      validators: this.passwordMatchValidator
    });
    
  }

  passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const repeatPassword = control.get('repeatPassword');

    if (!password || !repeatPassword || password.value === repeatPassword.value) {
      return null;
    }
    repeatPassword.setErrors({ mismatch: true });
    return { mismatch: true };
  };

  register() {
    if (this.registerForm.invalid) {
      return;
    }else {
      this.registrationData = new RequestRegistration();
      this.registrationData.setFirstName(this.registerForm.get('firstName')?.value);
      this.registrationData.setSecondName(this.registerForm.get('secondName')?.value);
      this.registrationData.setFirstLastname(this.registerForm.get('firstLastname')?.value);
      this.registrationData.setSecondLastname(this.registerForm.get('secondLastname')?.value);
      this.registrationData.setEmail(this.registerForm.get('email')?.value);
      this.registrationData.setPassword(this.registerForm.get('password')?.value);

      this.authService.register(this.registrationData).subscribe((data: ResponseData) => {
          if (data.responseCode=='201') {
            this.registerForm.reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Usuario registrado correctamente",
              showConfirmButton: false,
              timer: 5000
            });
            this.router.navigate(['/login']);
          }else {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Ha ocurrido un error registrando el usuario",
              showConfirmButton: false,
              timer: 5000
            });
          }
      }), (error: any) => {
        console.log("An Error Occured "+error);
      };            
    }    
  }

}