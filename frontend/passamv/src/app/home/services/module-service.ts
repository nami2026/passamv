import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Module } from '../dto/module';
import { catchError, Observable, retry, throwError } from 'rxjs';

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
export class ModuleService {
  
  baseUrl = "http://localhost:8080";
  moduleUrlGetAll = "/api/v1/modules";

  constructor(
    private http: HttpClient
  ) { }

  getItems(): Observable<Module[]> {
    return this.http.get<Module[]>(
        this.baseUrl+this.moduleUrlGetAll, 
        httpOptions
    ).pipe(retry(1), catchError(this.handleError))
  }
  
  handleError(error: any) {
    return throwError(() => error);
  }

}
