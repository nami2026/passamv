import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Area } from '../dto/area';

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
export class AreaService {

  baseUrl = "http://localhost:8080";
  areaUrlGetAll = "/api/v1/areas"
  areaUrlGet = "/api/v1/area/"
  
  constructor(
    private http: HttpClient
  ) { }

  getAreas(): Observable<Area[]> {
    return this.http.get<Area[]>(
      this.baseUrl+this.areaUrlGetAll, 
      httpOptions
      ).pipe(retry(1), catchError(this.handleError))
  }

  getAreaById(id: number): Observable<Area> {
    return this.http.get<Area>(
      this.baseUrl+this.areaUrlGet+id, 
      httpOptions
      ).pipe(retry(1), catchError(this.handleError))
  }

  handleError(error: any) {
    return throwError(() => error);
  }


  
}
