import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestRegistration } from '../../dto/request-registration';
import { catchError, lastValueFrom, Observable, retry, throwError } from 'rxjs';
import { ResponseData } from '../../dto/response-data';
import { RequestLogin } from '../../dto/request-login';
import { Router } from '@angular/router';
import { User } from '../../../home/dto/user';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type' : 'application/json'
    } 
  ),
  withCredentials: true
}

@Injectable({
  providedIn: 'root'
})
export class Auth {

  baseUrl = "http://localhost:8080";
  registrationUrl = "/auth/signup"
  loginUrl = "/auth/signin"
  logoutUrl = "/auth/signout"
  userUrl = "/api/v1/user/"
  
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(requestLoginDTO: RequestLogin): Observable<ResponseData> {
    return this.http.post<ResponseData>(
      this.baseUrl+this.loginUrl, 
      JSON.stringify(requestLoginDTO), 
      httpOptions
      ).pipe(retry(1), catchError(this.handleError))
  }

  register(requestRegistrationDTO: RequestRegistration): Observable<ResponseData> {      
    return this.http.post<ResponseData>(
      this.baseUrl+this.registrationUrl, 
      requestRegistrationDTO, 
      httpOptions
      ).pipe(
          retry(1),
          catchError(this.handleError)
      )          
  }

  async getUser(email: string): Promise<User> {
    const userObservable = this.http.get<User>(this.baseUrl+this.userUrl+email, httpOptions);
    const data = await lastValueFrom(userObservable);
    return data;
  }

  logout(): Observable<any> {
    return this.http.post<any>(
      this.baseUrl+this.logoutUrl, httpOptions
    ).pipe(
          retry(1),
          catchError(this.handleError)
      )
  }

  handleError(error: any) {
    return throwError(() => error);
  }
  
}
