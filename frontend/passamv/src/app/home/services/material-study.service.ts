import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, lastValueFrom, Observable, retry, throwError } from 'rxjs';
import { Content } from '../dto/content';

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
export class MaterialStudyService {
  
  baseUrl = "https://back-passamv.onrender.com";
  areaUrlGetAll = "/api/v1/contents"
  
  constructor(
    private http: HttpClient
  ) { }

  getDocumentss(): Observable<Content[]> {
    return this.http.get<Content[]>(
      this.baseUrl+this.areaUrlGetAll, 
      httpOptions
      ).pipe(retry(1), catchError(this.handleError))
  }


  async getDocuments(): Promise<Content[]>  {
    const dataObservable = this.http.get<Content[]>(this.baseUrl+this.areaUrlGetAll, httpOptions);
    const data = await lastValueFrom(dataObservable);
    return data;
  }

  handleError(error: any) {
    return throwError(() => error);
  }

}
