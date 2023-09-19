import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, of } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserFakeService {
  private currentUserSource = new ReplaySubject<User>(1);
  public currentUser$ = this.currentUserSource.asObservable();

  private apiURL = enviroment.baseApiUrl + '/users';

  constructor(private http: HttpClient) {}

  register(model: any): Observable<void> {
    return this.http.post<User>(this.apiURL, model).pipe(
      take(1),
      map((response: User) => {
        const user = response;
        if (user) {
          this.setCurrentUser(user);
        }
      })
    );
  }

  public setCurrentUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSource.next(user);
  }
}
