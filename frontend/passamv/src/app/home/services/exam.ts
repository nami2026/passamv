import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, lastValueFrom, Observable, retry, throwError } from 'rxjs';
import { ExamItem } from '../dto/exam-item';

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
export class ExamService {

  baseUrl = "http://localhost:8080";
  saveExamUrl = "/api/v1/save-exam";

  constructor(
    private http: HttpClient
  ) { }

  subtractHours(date: Date, hours: number) {
    date.setHours(date.getHours() - hours);
    return date;
  }

  async saveExam(): Promise<ExamItem> {
    const dataObservable = this.http.post<ExamItem>(this.baseUrl+this.saveExamUrl, {date: this.subtractHours(new Date(), 5)}, httpOptions);
    const data = await lastValueFrom(dataObservable);
    return data;
  }

  handleError(error: any) {
    return throwError(() => error);
  }

  
}
