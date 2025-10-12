import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  downloadFile(url: string, filename: string): Observable<Blob> {
    return this.http.get(url, { responseType: 'blob', headers: new HttpHeaders({'Access-Control-Allow-Origin': '*', 
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'})})
    .pipe(retry(1), catchError(this.handleError));
  }

  saveFile(blob: Blob, filename: string): void {
    saveAs(blob, filename);
  }

  handleError(error: any) {
      return throwError(() => error);
  }
}