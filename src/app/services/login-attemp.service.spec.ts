import { TestBed } from '@angular/core/testing';

import { LoginAttempService } from './login-attemp.service';

describe('LoginAttempService', () => {
  let service: LoginAttempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginAttempService);
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve registrar uma tentativa de login', () => {
    const email = 'exemplo@exemplo.com';
    service.recordLoginAttemp(email);
    expect(service.isLoginBlocked(email)).toBeFalse();
  });

  it('deve verificar se o login está bloqueado após muitas tentativas', () => {
    const email = 'exemplo@exemplo.com';
    for (let i = 0; i < service.maxAttemps; i++) {
      service.recordLoginAttemp(email);
    }
    expect(service.isLoginBlocked(email)).toBeTruthy();
  });

  it('deve redefinir as tentativas de login após uma redefinição', () => {
    const email = 'exemplo@exemplo.com';
    for (let i = 0; i < service.maxAttemps; i++) {
      service.recordLoginAttemp(email);
    }
    expect(service.isLoginBlocked(email)).toBeTruthy();
    service.resetLomginAttemps(email);

    expect(service.isLoginBlocked(email)).toBeFalse();
  });
});
