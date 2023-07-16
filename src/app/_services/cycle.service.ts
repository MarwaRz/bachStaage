import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Cycle} from '../_model/cycle'
@Injectable({
  providedIn: 'root'
})
export class CycleService {

  private baseUrl = 'http://localhost:9090/cycle';

  constructor(private http: HttpClient) { }

  getCycle(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  getAllCycle(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }


  createCycle(cycle: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, cycle);
  }

  
}
