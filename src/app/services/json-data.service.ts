import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, take } from 'rxjs';
import { PaginatedResult } from '../models/Pagination';
import { Videos } from '../models/Videos';

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
        return of(null); // Retorna um valor nulo em caso de erro
      })
    );
  }
}
