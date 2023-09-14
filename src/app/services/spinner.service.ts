import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private showSpinnerSubject = new BehaviorSubject<boolean>(false);

  constructor() {}

  show(): void {
    this.showSpinnerSubject.next(true);

    setTimeout(() => {
      this.hide();
    }, 2000);
  }

  hide(): void {
    this.showSpinnerSubject.next(false);
  }

  getSpinnerVisibility(): Observable<boolean> {
    return this.showSpinnerSubject.asObservable();
  }
}
