import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { JsonDataService } from './json-data.service';

describe('JsonDataService', () => {
  let service: JsonDataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [JsonDataService],
    });
  });

  beforeEach(() => {
    service = TestBed.inject(JsonDataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve fazer uma solicitação GET', () => {
    const testData = {};

    service.getData().subscribe((data) => {
      expect(data).toEqual(testData);
    });

    const req = httpMock.expectOne(service['jsonUrl']);
    expect(req.request.method).toBe('GET');

    req.flush(testData);
  });
});
