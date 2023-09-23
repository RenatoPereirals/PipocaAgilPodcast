import { TestBed } from '@angular/core/testing';
import { ToastService } from './toast.service';

describe('ToastService', () => {
  let service: ToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastService);
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve definir a mensagem de confirmação corretamente', () => {
    service.confirmRegistration(
      'Cadastro realizado',
      'A <strong>confirmação</strong> do seu <strong>cadastro</strong> será enviado pelo <strong>e-mail associado</strong> à sua nova conta',
      'confirmation'
    );
    expect(service.title).toBe('Cadastro realizado');
    expect(service.message).toContain(
      'A <strong>confirmação</strong> do seu <strong>cadastro</strong> será enviado pelo <strong>e-mail associado</strong> à sua nova conta'
    );
    expect(service.messageType).toBe('confirmation');
  });

  it('deve definir a mensagem de erro corretamente', () => {
    service.errorRegistration(
      'Erro no cadastro!',
      'Corrija os erros abaixo!',
      'error'
    );
    expect(service.title).toBe('Erro no cadastro!');
    expect(service.message).toContain('Corrija os erros abaixo!');
    expect(service.messageType).toBe('error');
  });

  it('deve limpar as mensagens', () => {
    service.confirmRegistration(
      'Cadastro realizado',
      'A <strong>confirmação</strong> do seu <strong>cadastro</strong> será enviado pelo <strong>e-mail associado</strong> à sua nova conta',
      'confirmation'
    );
    service.clear();
    expect(service.title).toBe('');
    expect(service.message).toBe('');
    expect(service.messageType).toBe('confirmation');
  });

  it('deve mostrar mensagem em segundo plano', () => {
    const title = 'Background Message';
    const message = 'This is a background message';
    service.showBackgroundMessage(title, message);
    expect(service.title).toBe(title);
    expect(service.message).toBe(message);
  });
});
