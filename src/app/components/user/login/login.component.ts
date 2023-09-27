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

  public validation(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  togglePasswordVisibility(inputId: string, imgId: string): void {
    this.passwordVisible = !this.passwordVisible;
    this.imgShow = !this.imgShow;

    const passwordInput = document.getElementById(inputId) as HTMLInputElement;
    const togglePassword = document.getElementById(imgId) as HTMLImageElement;

    passwordInput.type = this.passwordVisible ? 'text' : 'password';
    togglePassword.src = this.imgShow
      ? this.imageAbertaUrl
      : this.imageFechadaUrl;
  }

  public cssValidator(campoForm: FormControl | AbstractControl): any {
    return { 'is-invalid': campoForm.errors && campoForm.touched };
  }

  public cssBackgroundValidator(campoForm: FormControl | AbstractControl): any {
    return { 'valid-backgroud ': campoForm.valid };
  }

  public cssBackgroundInvalidator(
    campoForm: FormControl | AbstractControl
  ): any {
    return { 'invalid-background': campoForm.errors && campoForm.touched };
  }

  login(): void {
    const userLogin: UserLogin = {
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
    };

    if (this.form.invalid) {
      this.showErrorForRequiredFields();
      console.log('erro de formulário');
      this.toast.errorRegistration(
        'Erro ao fazer login!',
        'Corrija os erros abaixo',
        'error'
      );
    } else if (this.loginAttemps.isLoginBlocked(userLogin.email)) {
      console.log('erro de senha');
      this.toast.confirmRegistration(
        'Você atingiu o número máximo de tentativas',
        'Você está bloqueado temporariamente',
        'confirmation'
      );
    } else {
      console.log('passou pelas validações');
      // Todas as validações passaram, pode fazer a tentativa de login
      this.spinnerService.show();

      this.userSevice.login(userLogin.email, userLogin.password).subscribe({
        next: (result) => {
          if (result) {
            console.log('usuário logado');
            setTimeout(() => {
              this.toast.confirmRegistration(
                'Login bem-sucedido',
                'Você está logado na sua conta.',
                'confirmation'
              );
              this.router.navigateByUrl('/');
            }, 2000);
          } else {
            setTimeout(() => {
              console.log('erro ao tentar fazer login');
              this.toast.errorRegistration(
                'Erro ao tentar fazer login!',
                'E-mail ou senha estão errados',
                'error'
              );
              this.loginAttemps.recordLoginAttemp(userLogin.email); // Registra tentativa de login
            }, 2000);
            console.log('Usuário não cadastrado no sistema');
          }
        },
        error: (error) => {
          console.error(error);
          this.toast.errorRegistration(
            'Erro ao tentar fazer login.',
            'Pofavor tente novamente',
            'error'
          );
        },
        complete: () => {
          console.log('subscribe completo');
          setTimeout(() => {
            this.spinnerService.hide();
          }, 2000);
        },
      });
    }
  }
}
