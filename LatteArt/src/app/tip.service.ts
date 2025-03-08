import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';


@Injectable({
    providedIn: 'root',
})
export class TipService {
    private apiUrl = 'https://localhost:3000/api/v1/tips/generate';

    constructor(private http: HttpClient) {
    }

    getTip(): Observable<string> {
        return this.http.get<any>(this.apiUrl).pipe(
            map(response => response.tip),
            catchError(error => {
                console.error('Error fetching tip:', error);
                return of('Failed to load tip of the day.');
            })
        );
    }

}
