import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Historical } from '../dto/historical';
import { lastValueFrom } from 'rxjs';

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
export class HistoricalService {
  
  baseUrl = "https://back-passamv.onrender.com";
  saveHistoricalUrl = "/api/v1/save-historical";
  getHistoricalUrl = "/api/v1/historical/user/";

  constructor(
    private http: HttpClient
  ) { }

  async saveHistorical(historical: Historical): Promise<Historical> {
    const dataObservable = this.http.post<Historical>(this.baseUrl+this.saveHistoricalUrl, historical, httpOptions);
    const data = await lastValueFrom(dataObservable);
    return data;
  }

  async getByUserId(userId: number): Promise<Historical[]> {
    const dataObservable = this.http.get<Historical[]>(this.baseUrl+this.saveHistoricalUrl+userId, httpOptions);
    const data = await lastValueFrom(dataObservable);
    return data;
  }

}
