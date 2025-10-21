import { Component, OnInit } from '@angular/core';
import { Header } from '../header/header';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { Auth } from '../../service/auth/auth';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2'
import { RequestLogin } from '../../dto/request-login';
import { ResponseData } from '../../dto/response-data';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [Header, CommonModule,
    HttpClientModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login implements OnInit {

  loginForm!: FormGroup;
  private requestLogin: RequestLogin;
  titleLogin = "login";

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: Auth
  ) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    } else {
      this.requestLogin = new RequestLogin();
      this.requestLogin.setEmail(this.loginForm.get('email')?.value);
      this.requestLogin.setPassword(this.loginForm.get('password')?.value);

      this.authService.login(this.requestLogin).subscribe(async (data: ResponseData) => {
        if (data.responseCode == '200') {
          const user = await this.authService.getUser(this.loginForm.get('email')?.value);
          this.loginForm.reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Usuario autenticado correctamente",
            showConfirmButton: false,
            timer: 5000
          });
          sessionStorage.setItem("idUser", user.id.toString())
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("userName", this.requestLogin.getEmail());
          this.router.navigate(["/home"]);
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Ha ocurrido un error en la autenticación, usuario o contraseña incorrectos",
            showConfirmButton: false,
            timer: 5000
          });
        }
      }, (error: any) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Ha ocurrido un error autenticando el usuario",
          showConfirmButton: false,
          timer: 5000
        });
      });
    }
  }

}
