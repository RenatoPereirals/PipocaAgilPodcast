import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { CadastroComponent } from './cadastro.component';
import { UserFakeService } from 'src/app/services/user-fake.service';
import { ToastService } from 'src/app/services/toast.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { DatePickerService } from 'src/app/services/date-picker.service';
import { Router } from '@angular/router';

describe('CadastroComponent', () => {
  let component: CadastroComponent;
  let fixture: ComponentFixture<CadastroComponent>;
  let userService: UserFakeService;
  let toastService: ToastService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [
        UserFakeService,
        ToastService,
        SpinnerService,
        DatePickerService,
      ],
    });

    fixture = TestBed.createComponent(CadastroComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserFakeService);
    toastService = TestBed.inject(ToastService);
    router = TestBed.inject(Router);

    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve validar o formulário quando inválido', () => {
    const form = component.form;
    form.get('nomeCompleto')?.setValue('');
    form.get('email')?.setValue('');
    form.get('date')?.setValue('');
    form.get('password')?.setValue('');
    form.get('confirmePassword')?.setValue('');
    form.get('termo')?.setValue(false);

    expect(form.valid).toBeFalsy();
  });

  it('deve validar o formulário quando válido', () => {
    const form = component.form;
    form.get('nomeCompleto')?.setValue('John Doe');
    form.get('email')?.setValue('john@example.com');
    form.get('date')?.setValue('1990-01-01');
    form.get('password')?.setValue('password123');
    form.get('confirmePassword')?.setValue('password123');
    form.get('termo')?.setValue(true);

    expect(form.valid).toBeTruthy();
  });

  it('deve registrar o usuário com sucesso', () => {
    const user = {
      nomeCompleto: 'John Doe',
      email: 'john@example.com',
      date: '1990-01-01',
      password: 'password123',
      confirmePassword: 'password123',
      termo: true,
    };

    spyOn(userService, 'register').and.returnValue(of(void 0));

    spyOn(toastService, 'errorRegistration');

    component.form.setValue(user);

    component.registerUser();

    expect(userService.register).toHaveBeenCalledWith(user);
    expect(toastService.errorRegistration).not.toHaveBeenCalled();
  });

  it('deve lidar com o erro ao registrar o usuário', () => {
    const invalidUser = {
      nomeCompleto: '',
      email: '',
      date: '',
      password: '',
      confirmePassword: '',
      termo: false,
    };

    spyOn(userService, 'register').and.returnValue(
      throwError(() => new Error('Simulated error'))
    );

    spyOn(toastService, 'errorRegistration');

    component.form.setValue(invalidUser);

    component.registerUser();

    expect(userService.register).not.toHaveBeenCalledWith(invalidUser);

    expect(toastService.errorRegistration).toHaveBeenCalled();
  });
});
