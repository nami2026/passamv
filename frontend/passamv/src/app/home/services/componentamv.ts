import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Area } from '../dto/area';
import { ComponentAmv } from '../dto/componentamv';

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

export class ComponentAmvService {

  baseUrl = "https://back-passamv.onrender.com";
  areaUrl = "/api/v1/areas"
  componentAmvUrl = "/api/v1/componentamv"
  
  constructor(
    private http: HttpClient
  ) { }

  getAreaById(id: number): Observable<Area[]> {
    return this.http.get<Area[]>(
      this.baseUrl+this.areaUrl, 
      httpOptions
      ).pipe(retry(1), catchError(this.handleError))
  }

  getComponentsAmv(): Observable<ComponentAmv[]> {
    return this.http.get<ComponentAmv[]>(
      this.baseUrl+this.componentAmvUrl, 
      httpOptions
      ).pipe(retry(1), catchError(this.handleError))
  }

  handleError(error: any) {
    return throwError(() => error);
  }

  
}
