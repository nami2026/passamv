import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Area } from '../dto/area';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSourceArea = new BehaviorSubject<Area>(new Area());
  currentMessage: Observable<Area> = this.messageSourceArea.asObservable();

  constructor() { }

  changeMessageArea(message: Area) {
    this.messageSourceArea.next(message);
  }
  
}
