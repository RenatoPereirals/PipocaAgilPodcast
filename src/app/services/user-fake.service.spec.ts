import { TestBed } from '@angular/core/testing';

import { UserFakeService } from './user-fake.service';

describe('UserFakeService', () => {
  let service: UserFakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
