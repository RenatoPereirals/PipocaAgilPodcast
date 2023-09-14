import { Component } from '@angular/core';
import { ToastService } from './services/toast.service';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Squad-Vermelho-Coral';

  constructor(
    public toastService: ToastService,
    public spinnerService: SpinnerService
  ) {}
}
