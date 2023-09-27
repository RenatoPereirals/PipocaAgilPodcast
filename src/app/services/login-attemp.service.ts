import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginAttempService {
  private loginAttemps: { [email: string]: number } = {};
  public maxAttemps = 3; //Número máximo de tentativas de login permitidas

  constructor() {}

  recordLoginAttemp(email: string): void {
    if (this.loginAttemps[email]) {
      this.loginAttemps[email]++;
    } else {
      this.loginAttemps[email] = 1;
    }
  }

  isLoginBlocked(email: string): boolean {
    return this.loginAttemps[email] >= this.maxAttemps;
  }

  resetLomginAttemps(email: string): void {
    delete this.loginAttemps[email];
  }
}
