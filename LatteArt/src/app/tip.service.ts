import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TipService {
  // If you are testing, change this to http.
  private apiUrl = 'http://localhost:3000/api/v1/tips/generate';

  constructor(private http: HttpClient) {}

  getTip(): Observable<string> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.tip),
      catchError((error: HttpErrorResponse) => { 
        console.error('Error fetching tip:', error);
        if(error.status == 0){
            return of('The tip server is not running, please contact support.');
        }
        return of('Failed to load tip of the day.');
      })
    );
  }
}
