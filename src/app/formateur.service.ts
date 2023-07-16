import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Formateur} from './formateur'
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  private baseUrl = 'http://localhost:9090/formateur';

  constructor(private http: HttpClient) { }

  getFormateur(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }




  searchByNom(nomFormateur: string): Observable<Formateur[]> {
    const params = new HttpParams().set('nomFormateur', nomFormateur);
    return this.http.get<Formateur[]>('http://localhost:9090/formateur/search', { params });
  }




  public getAllFormateurs(pageNumber, searchKeyword: string= ""){
    return this.http.get<Formateur[]>("http://localhost:9090/getAllFormateurs?pageNumber="+pageNumber+"&searchKey="+searchKeyword);
  }
  createForamteur(formateur: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, formateur);
  }

  updateFormateur(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteFormateur(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getFormateurList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}