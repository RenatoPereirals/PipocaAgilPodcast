import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { UserFakeService } from 'src/app/services/user-fake.service';
import { ToastService } from 'src/app/services/toast.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { LoginAttempService } from 'src/app/services/login-attemp.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let userFakeService: UserFakeService;
  let toastService: ToastService;
  let loginAttempService: LoginAttempService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [
        UserFakeService,
        ToastService,
        SpinnerService,
        LoginAttempService,
      ],
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    userFakeService = TestBed.inject(UserFakeService);
    toastService = TestBed.inject(ToastService);
    loginAttempService = TestBed.inject(LoginAttempService);

    fixture.detectChanges();
  });

  it('should create the login component', () => {
    expect(component).toBeTruthy();
  });

  describe('Validação de formulário', () => {
    it('deve mostrar mensagem de erro para campos obrigatórios', () => {
      component.validation();
      component.form.markAllAsTouched();
      component.showErrorForRequiredFields();
      expect(component.form.get('email')?.hasError('required')).toBe(true);
      expect(component.form.get('password')?.hasError('required')).toBe(true);
    });

    it('deve exibir mensagem de erro quando o campo "email" não é válido', () => {
      component.validation();
      const emailControl = component.form.get('email');
      emailControl?.setValue('invalidemail');
      emailControl?.markAsTouched();
      expect(emailControl?.hasError('email')).toBe(true);
    });

    it('deve exibir uma mensagem de erro qunado a senha é menor que 8 caracteres', () => {
      component.validation();
      const passwordControl = component.form.get('password');
      passwordControl?.setValue('pass');
      passwordControl?.markAsTouched();
      expect(passwordControl?.hasError('minlength')).toBe(true);
    });
  });

  describe('Fução de Login', () => {
    it('deve exibir uma mensagem de erro para campos inválidos', () => {
      spyOn(component.toast, 'errorRegistration');
      component.login();
      expect(component.toast.errorRegistration).toHaveBeenCalled();
    });

    it('deve aparecer uma mensagem de usuário bloqueado', () => {
      spyOn(component.toast, 'confirmRegistration');
      spyOn(loginAttempService, 'isLoginBlocked').and.returnValue(true);
      component.form.setValue({
        email: 'blockeduser@example.com',
        password: 'password123',
      });
      component.login();
      expect(component.toast.confirmRegistration).toHaveBeenCalled();
    });

    it('deve lidar com o login bem-sucedido', fakeAsync(() => {
      const userLogin = { email: 'test@example.com', password: 'password123' };
      spyOn(component.toast, 'confirmRegistration');
      spyOn(userFakeService, 'login').and.returnValue(of(true));
      component.form.setValue(userLogin);
      component.login();
      tick(2001);
      expect(component.toast.confirmRegistration).toHaveBeenCalled();
    }));

    it('deve lidar com o erro de login', fakeAsync(() => {
      const userLogin = { email: 'test@example.com', password: 'password123' };
      spyOn(component.toast, 'errorRegistration');
      spyOn(userFakeService, 'login').and.returnValue(
        throwError(() => new Error('Login error'))
      );
      component.form.setValue(userLogin);
      component.login();
      tick(2001);
      expect(component.toast.errorRegistration).toHaveBeenCalled();
    }));
  });
});
