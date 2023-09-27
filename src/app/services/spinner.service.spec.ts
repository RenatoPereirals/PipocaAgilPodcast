import { TestBed } from '@angular/core/testing';

import { SpinnerService } from './spinner.service';

describe('SpinnerService', () => {
  let service: SpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerService);
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve mostrar o spinner', () => {
    service.show();
    expect(service.showSpinnerSubject).toBe(true);
  });

  it('deve esconder o spinner após um atraso', (done) => {
    service.show();
    expect(service.showSpinnerSubject).toBe(true);

    setTimeout(() => {
      expect(service.showSpinnerSubject).toBe(false);
      done();
    }, 2000);
  });

  it('deve esconder o spinner', () => {
    service.hide();
    expect(service.showSpinnerSubject).toBe(false);
  });
});
