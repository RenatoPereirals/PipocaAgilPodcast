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
    // Obtenha o serviço e o HttpTestingController antes de cada teste
    service = TestBed.inject(JsonDataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verifique se todas as solicitações foram tratadas
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a GET request', () => {
    const testData = {

    };

    // Faça uma solicitação HTTP simulada
    service.getData().subscribe((data) => {
      expect(data).toEqual(testData); // Verifica se os dados retornados são os esperados
    });

    // Verifique a solicitação HTTP simulada
    const req = httpMock.expectOne(service['jsonUrl']); // Observe que estamos acessando a propriedade privada jsonUrl do serviço para verificar a URL
    expect(req.request.method).toBe('GET'); // Verifique se a solicitação é do tipo GET

    // Fornecer dados simulados como resposta à solicitação
    req.flush(testData);
  });
});
