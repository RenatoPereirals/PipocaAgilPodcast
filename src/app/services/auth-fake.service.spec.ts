import { TestBed } from '@angular/core/testing';

import { AuthFakeService } from './auth-fake.service';

describe('AuthFakeService', () => {
  let service: AuthFakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthFakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
