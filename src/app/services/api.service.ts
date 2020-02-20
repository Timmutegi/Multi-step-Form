import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ErrorHandlingService } from './error-handling.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'https://obscure-beyond-81246.herokuapp.com/api';

  constructor(private http: HttpClient, private errorHandling: ErrorHandlingService) { }

  postData(endpoint: string, data: JSON) {
    return this.http.post<any>(this.baseUrl + endpoint, data).pipe(catchError(this.errorHandling.handleError));
  }

  getData(endpoint: string) {
    return this.http.get<any>(this.baseUrl + endpoint);
  }
}
