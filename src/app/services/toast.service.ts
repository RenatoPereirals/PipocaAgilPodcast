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

  confirmRegistration(
    title: string,
    message: string,
    messageType: 'confirmation' | 'error'
  ): void {
    this.showMessage(title, message, messageType);
  }

  errorRegistration(
    title: string,
    message: string,
    messageType: 'confirmation' | 'error'
  ): void {
    this.showMessage(title, message, messageType);
  }

  clear() {
    this.message = '';
    this.title = '';
    this.messageType = 'confirmation';
  }
}
