import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  message: string = '';
  title: string = '';

  constructor() {}

  addConfirm() {
    this.message =
      'A confirmação do seu cadastro será enviado pelo email associado à sua nova conta ';
    this.title = 'Cadastro realizado';

    setTimeout(() => {
      this.clear();
    }, 4000);
  }

  clear() {
    this.message = '';
    this.title = '';
  }
}
