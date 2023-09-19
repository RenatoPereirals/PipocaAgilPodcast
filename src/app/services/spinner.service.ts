import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  public showSpinnerSubject = false;

  constructor() {}

  show(): void {
    this.showSpinnerSubject = true;

    setTimeout(() => {
      this.hide();
    }, 4000);
  }

  hide(): void {
    this.showSpinnerSubject = true;
  }
}
