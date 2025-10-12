import { inject } from '@angular/core';
import {
  HttpInterceptorFn,
} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Auth } from '../security/service/auth/auth';
import Swal from 'sweetalert2'


export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(Auth);
  return next(req).pipe(
    catchError((err) => {
      console.log(err);
      if (err.status === 401) {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Tu sesión ha caducado",
            showConfirmButton: false,
            timer: 5000
        });
        authService.logout();
      }
      return throwError(() => new Error('Unauthorized Exception'));
    })
  );
};
