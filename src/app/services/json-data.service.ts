import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JsonDataService {
  private jsonUrl = '../../assets/data/Data.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }

  getVideos(): Observable<any[]> {
    return this.getData().pipe(map((data: any) => data.videos || []));
  }
}
