import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { CadastroComponent } from './cadastro.component';
import { UserFakeService } from 'src/app/services/user-fake.service';
import { ToastService } from 'src/app/services/toast.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { DatePickerService } from 'src/app/services/date-picker.service';
import { Router } from '@angular/router';
import { DebugElement } from '@angular/core';

describe('CadastroComponent', () => {
  let component: CadastroComponent;
  let fixture: ComponentFixture<CadastroComponent>;
  let userService: UserFakeService;
  let toastService: ToastService;

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

    fixture.detectChanges();
  });

  describe('Validação de formulário', () => {
    // Campo Nome Completo
    it('deve exibir mensagem de erro quando o campo "nome completo" é tocado e está vazio', () => {
      const nomeCompletoControl = component.form.get('nomeCompleto');

      nomeCompletoControl?.markAsTouched();

      const campoObrigatorioError =
        fixture.nativeElement.querySelector('.is-invalid');
      expect(campoObrigatorioError).toBeTruthy();
    });

    it('deve exibir mensagem de erro quando o campo "nome completo" contém menos de 4 caracteres', () => {
      const nomeCompletoControl = component.form.get('nomeCompleto');

      nomeCompletoControl?.setValue('Jo');

      nomeCompletoControl?.markAsTouched();

      const minimoCaracteresError =
        fixture.nativeElement.querySelector('.is-invalid');
      expect(minimoCaracteresError).toBeTruthy();
    });

    // Campo E-mail
    it('deve exibir mensagem de erro quando o campo "email" é tocado e está vazio', () => {
      const emailControl = component.form.get('email');

      emailControl?.markAsTouched();

      const campoObrigatorioError =
        fixture.nativeElement.querySelector('.is-invalid');
      expect(campoObrigatorioError).toBeTruthy();
    });

    it('deve exibir mensagem de erro quando o campo "email" não é válido', () => {
      const emailControl = component.form.get('email');

      emailControl?.setValue('emailinvalido');

      expect(emailControl?.invalid).toBeTruthy();
      expect(emailControl?.hasError('email')).toBeTruthy();
    });

    // Campo Data
    it('deve exibir mensagem de erro quando o campo "data" é tocado e está vazio', () => {
      const dateControl = component.form.get('date');

      dateControl?.markAsTouched();

      const campoObrigatorioError =
        fixture.nativeElement.querySelector('.is-invalid');
      expect(campoObrigatorioError).toBeTruthy();
    });

    it('deve exibir mensagem de erro quando o usuário tem menos de 18 anos', () => {
      const dateControl = component.form.get('date');

      dateControl?.setValue('2010-01-01');

      expect(dateControl?.invalid).toBeTruthy();
      expect(dateControl?.hasError('ageInvalid')).toBeTruthy();
    });

    // Campo Senha
    it('deve exibir mensagem de erro quando o campo "senha" é tocado e está vazio', () => {
      const passwordControl = component.form.get('password');

      passwordControl?.markAsTouched();

      const campoObrigatorioError =
        fixture.nativeElement.querySelector('.is-invalid');
      expect(campoObrigatorioError).toBeTruthy();
    });

    it('deve exibir mensagem de erro quando o campo "senha" tem menos de 8 caracteres', () => {
      const passwordControl = component.form.get('password');

      passwordControl?.setValue('1234567');

      expect(passwordControl?.invalid).toBeTruthy();
      expect(passwordControl?.hasError('minlength')).toBeTruthy();
    });

    // Campo de confirmação de senha
    it('deve exibir mensagem de erro quando o campo "confirmação de senha" é tocado e está vazio', () => {
      const confirmPasswordControl = component.form.get('confirmePassword');

      confirmPasswordControl?.markAsTouched();

      const campoObrigatorioError =
        fixture.nativeElement.querySelector('.is-invalid');
      expect(campoObrigatorioError).toBeTruthy();
    });

    it('deve exibir mensagem de erro quando o campo "confirmação de senha" não é igual à senha', () => {
      const passwordControl = component.form.get('password');
      const confirmPasswordControl = component.form.get('confirmePassword');

      passwordControl?.setValue('password123');
      confirmPasswordControl?.setValue('password456');

      expect(confirmPasswordControl?.invalid).toBeTruthy();
      expect(confirmPasswordControl?.hasError('mustMatch')).toBeTruthy();
    });

    // Campo Termo
    it('deve validar que o checkbox de termo é obrigatório', () => {
      const termoControl = component.form.get('termo');

      termoControl?.setValue(false);

      expect(termoControl?.invalid).toBe(true);
      expect(termoControl?.hasError('required')).toBe(true);

      termoControl?.setValue(true);

      expect(termoControl?.valid).toBe(true);
      expect(termoControl?.hasError('required')).toBe(false);
    });
  });

  describe('Registro de usuário', () => {
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
});
