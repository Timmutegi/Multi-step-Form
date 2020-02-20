import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'https://obscure-beyond-81246.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  postData(endpoint: string, data: JSON) {
    return this.http.post<any>(this.baseUrl + endpoint, data);
  }

  getData(endpoint: string) {
    return this.http.get<any>(this.baseUrl + endpoint);
  }
}
