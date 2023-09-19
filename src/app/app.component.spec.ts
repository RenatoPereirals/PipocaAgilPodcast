import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ToastService } from './services/toast.service';
import { SpinnerService } from './services/spinner.service';
import { DatePickerService } from './services/date-picker.service';
import { ToastComponent } from './components/shared/toasts/toast/toast.component';
import { BackgroundToastComponent } from './components/shared/toasts/background-toast/background-toast.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [
        SpinnerService,
        DatePickerService,
        HeaderComponent,
        ToastComponent,
        BackgroundToastComponent,
      ],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Squad-Vermelho-Coral'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Squad-Vermelho-Coral');
  });
});
