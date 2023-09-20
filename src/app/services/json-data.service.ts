import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JsonDataService {
  private jsonUrl = '../../assets/data/Data.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.jsonUrl).pipe(
      catchError((error) => {
        console.error('Erro ao carregar dados do JSON:', error);
        return of(null);
      })
    );
  }
}
