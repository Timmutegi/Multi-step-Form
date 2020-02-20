import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {

  constructor() { }
    handleError(error: HttpErrorResponse) {
    console.log(error);
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nError: ${error.error}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
