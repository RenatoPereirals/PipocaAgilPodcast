import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  message: string = '';
  title: string = '';
  messageType: 'confirmation' | 'error' = 'confirmation';

  constructor() {}

  private showMessage(
    title: string,
    message: string,
    messageType: 'confirmation' | 'error'
  ) {
    this.message = message;
    this.title = title;
    this.messageType = messageType;

    setTimeout(() => {
      this.clear();
    }, 4000);
  }

  showBackgroundMessage(title: string, message: string) {
    this.message = message;
    this.title = title;
  }

  confirmRegistration(): void {
    this.showMessage(
      'Cadastro realizado',
      'A <strong>confirmação</strong> do seu <strong>cadastro</strong> será enviado pelo <strong>e-mail associado</strong> à sua nova conta',
      'confirmation'
    );
  }

  errorRegistration(): void {
    this.showMessage('Erro no cadastro!', 'Corrija os erros abaixo!', 'error');
  }

  clear() {
    this.message = '';
    this.title = '';
    this.messageType = 'confirmation';
  }
}
