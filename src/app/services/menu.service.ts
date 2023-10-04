import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  public isMenuOpen = false;

  constructor() {}

  toggleMenuOpen() {
    this.isMenuOpen = true;
  }

  toggleMenuClose() {
    this.isMenuOpen = false;
  }
}
