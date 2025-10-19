import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Item } from '../dto/item';

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
export class ItemService {

  baseUrl = "http://localhost:8080";
  itemUrlGetAll = "/api/v1/items";

  constructor(
    private http: HttpClient
  ) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(
      this.baseUrl+this.itemUrlGetAll, 
      httpOptions
      ).pipe(retry(1), catchError(this.handleError))
  }

  handleError(error: any) {
    return throwError(() => error);
  }
  
}
