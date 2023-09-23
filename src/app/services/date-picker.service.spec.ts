import { TestBed } from '@angular/core/testing';

import { DatePickerService } from './date-picker.service';
import { FormBuilder } from '@angular/forms';

describe('DatePickerService', () => {
  let service: DatePickerService;
  let formBuilder: FormBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatePickerService, FormData],
    });

    service = TestBed.inject(DatePickerService);
    formBuilder = TestBed.inject(FormBuilder);
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve criar um formulário contendo um controle de data', () => {
    const form = service.createForm();
    expect(form).not.toBeNull();
    expect(form.get('date')).not.toBeNull();
  });

  it('deve validar o formato de data válido', () => {
    const control = formBuilder.control('01/01/2000');
    const validationResult = service.dateValidator(control);
    expect(validationResult).toBeNull();
  });

  it('deve invalidar o formato de data inválido', () => {
    const control = formBuilder.control('31-02-2000');
    const validationResult = service.dateValidator(control);
    expect(validationResult).toEqual({ invalidDatePattern: true });
  });

  it('deve falhar na validação para uma data inválida', () => {
    const control = formBuilder.control('30/02/2022'); //data inválida (fevereiro não tem 30 dias)
    const validationResult = service.dateValidator(control);
    expect(validationResult).toEqual({ invalidDate: true });
  });
});
