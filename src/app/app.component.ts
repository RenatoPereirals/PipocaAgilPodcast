import { Component, OnInit } from '@angular/core';
import { ToastService } from './services/toast.service';
import { SpinnerService } from './services/spinner.service';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Squad-Vermelho-Coral';

  constructor(
    public toastService: ToastService,
    public spinnerService: SpinnerService,
    public menuService: MenuService
  ) {}

  ngOnInit(): void {}
}
