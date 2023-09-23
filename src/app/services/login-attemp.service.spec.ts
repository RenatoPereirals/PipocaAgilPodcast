import { TestBed } from '@angular/core/testing';

import { LoginAttempService } from './login-attemp.service';

describe('LoginAttempService', () => {
  let service: LoginAttempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginAttempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
