import { Component, OnInit } from '@angular/core';

import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/models/UserLogin';

import { User } from 'src/app/models/user';
import { SpinnerService } from 'src/app/services/spinner.service';
import { LoginAttempService } from 'src/app/services/login-attemp.service';
import { ToastService } from 'src/app/services/toast.service';
import { UserFakeService } from 'src/app/services/user-fake.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  passwordVisible = false;
  imgShow = false;
  model = {} as UserLogin;

  form!: FormGroup;
  user = {} as User;

  imageFechadaUrl: string = '../../../../assets/image/Hide.png';
  imageAbertaUrl: string = '../../../../assets/image/show.png';

  constructor(
    private fb: FormBuilder,
    public toast: ToastService,
    private userSevice: UserFakeService,
    private spinnerService: SpinnerService,
    private router: Router,
    private loginAttemps: LoginAttempService
  ) {}

  get f(): any {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.validation();
  }

  // Deve exibir mensagens de erro para os campos inválidos
  showErrorForRequiredFields() {
    Object.keys(this.form.controls).forEach((field) => {
      const control = this.form.get(field);

      if (control?.hasError('required') && !control.touched) {
        control.markAsTouched();
        console.log(
          `Field: ${field}, Touched: ${control.touched}, Valid: ${control.valid}`
        );
      }
    });
  }

  // Altera a visibilidade da senha e altera a imagem
  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  // Validação do formulário
  public validation(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  // Deve exibe uma mensagem de erro quando o campo é clicado e está vazio
  public cssValidator(campoForm: FormControl | AbstractControl): any {
    return { 'is-invalid': campoForm.errors && campoForm.touched };
  }

  // Deve altera a cor de fundo do input quando válido
  public cssBackgroundValidator(campoForm: FormControl | AbstractControl): any {
    return { 'valid-backgroud ': campoForm.valid };
  }

  // Deve altera a cor de fundo do input quando inválido
  public cssBackgroundInvalidator(
    campoForm: FormControl | AbstractControl
  ): any {
    return { 'invalid-background': campoForm.errors && campoForm.touched };
  }

  // Deve lidar com erro de campos inválidos
  private handleInvalidForm(): void {
    this.showErrorForRequiredFields();
    this.toast.errorRegistration(
      'Erro ao fazer login!',
      'Corrija os erros abaixo',
      'error'
    );
  }

  // Deve lidar o com o bloqueio do email após três tentativas de login inválidas
  private handleBlockedLogin(email: string): void {
    this.toast.confirmRegistration(
      'Você atingiu o número máximo de tentativas',
      'Você está bloqueado temporariamente',
      'confirmation'
    );
  }

  // Deve tentar logar do usuário
  private attemptUserLogin(userLogin: UserLogin): void {
    this.spinnerService.show();
    this.userSevice.login(userLogin.email, userLogin.password).subscribe({
      next: (result: any) => {
        if (result) {
          this.handleSuccessfulLogin();
        } else {
          this.handleFailedLogin(userLogin.email);
        }
      },
      error: (error) => {
        this.handleError(error);
      },
      complete: () => {
        this.spinnerService.hide();
      },
    });
  }

  // Deve lidar com o login bem-sucedido e chamar o toast de confirmação
  private handleSuccessfulLogin(): void {
    this.toast.confirmRegistration(
      'Login bem-sucedido',
      'Você está logado na sua conta.',
      'confirmation'
    );
    this.router.navigateByUrl('/');
  }

  // Deve lidar com o erro caso o email e/ou senha estejam errados
  private handleFailedLogin(email: string): void {
    this.toast.errorRegistration(
      'Erro ao tentar fazer login!',
      'E-mail ou senha estão errados',
      'error'
    );
    this.loginAttemps.recordLoginAttemp(email); // Registra tentativa de login
  }

  // Deve lidar erros inesperados no login
  private handleError(error: any): void {
    console.error(error);
    this.toast.errorRegistration(
      'Erro ao tentar fazer login.',
      'Por favor, tente novamente',
      'error'
    );
  }

  // Deve lidar com o login de usuário válido e retornar erro caso o login seja inválido
  login(): void {
    const userLogin: UserLogin = {
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
    };

    if (this.form.invalid) {
      this.handleInvalidForm();
    } else if (this.loginAttemps.isLoginBlocked(userLogin.email)) {
      this.handleBlockedLogin(userLogin.email);
    } else {
      this.attemptUserLogin(userLogin);
    }
  }
}
