import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { UserFakeService } from './user-fake.service';
import { User } from '../models/user';

describe('UserFakeService', () => {
  let service: UserFakeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserFakeService],
    });

    service = TestBed.inject(UserFakeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should register a user', () => {
    const dummyUser: User = {
      id: 1,
      nomeCompleto: 'Nome Completo',
      email: 'exemplo@email.com',
      date: '01/01/1990',
      password: 'senha123',
    };

    // Substitua temporariamente a propriedade apiURL
    const originalApiUrl = (service as any).apiURL;
    (service as any).apiURL = 'http://example.com/users';

    service.register(dummyUser).subscribe(() => {
      expect(service.currentUser$).toBeTruthy();
      expect(localStorage.getItem('user')).toEqual(JSON.stringify(dummyUser));
    });

    const req = httpMock.expectOne('http://example.com/users');
    expect(req.request.method).toBe('POST');
    req.flush(dummyUser);

    // Restaure o valor original de apiURL após o teste
    (service as any).apiURL = originalApiUrl;
  });

  it('should set the current user', () => {
    const dummyUser: User = {
      id: 1,
      nomeCompleto: 'Nome Completo',
      email: 'exemplo@email.com',
      date: '01/01/1990',
      password: 'senha123',
    };

    service.setCurrentUser(dummyUser);

    expect(localStorage.getItem('user')).toEqual(JSON.stringify(dummyUser));
    service.currentUser$.subscribe((user) => {
      expect(user).toEqual(dummyUser);
    });
  });
});
