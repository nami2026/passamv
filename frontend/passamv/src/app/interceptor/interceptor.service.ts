import { inject } from '@angular/core';
import {
  HttpInterceptorFn,
} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Auth } from '../security/service/auth/auth';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';


export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(Auth);
  const router = inject(Router);
  return next(req).pipe(
    catchError((err) => {
      if (err.status === 403) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Tu sesión ha caducado",
            showConfirmButton: false,
            timer: 5000
        });
        authService.logout().subscribe(logout => {
          sessionStorage.clear()
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("userName");
          router.navigate(["/login"]);
        });
      }
      return throwError(() => new Error('Unauthorized Exception'));
    })
  );
};
