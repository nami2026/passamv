import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Area } from '../dto/area';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type' : 'application/json'
    }
  )
}

@Injectable({
  providedIn: 'root'
})

export class Componentamv {

  baseUrl = "http://localhost:8080";
  areaUrl = "/api/v1/areas"
  
  constructor(
    private http: HttpClient
  ) { }

  getAreaById(id: number): Observable<Area[]> {
    return this.http.get<Area[]>(
      this.baseUrl+this.areaUrl, 
      httpOptions
      ).pipe(retry(1), catchError(this.handleError))
  }

  handleError(error: any) {
    return throwError(() => error);
  }

  
}
