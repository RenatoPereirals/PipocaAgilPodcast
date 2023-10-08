import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AbstractControlOptions,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { ValidatorField } from 'src/app/helpers/ValidatorField';
import { User } from 'src/app/models/user';

import { DatePickerService } from 'src/app/services/date-picker.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { ToastService } from 'src/app/services/toast.service';
import { UserFakeService } from 'src/app/services/user-fake.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  passwordVisible = false;
  showAgeError = false;

  imageFechadaUrl = '../../../../assets/image/Hide.png';
  imageAbertaUrl = '../../../../assets/image/show.png';

  form!: FormGroup;
  user = {} as User;

  constructor(
    private fb: FormBuilder,
    private toast: ToastService,
    private dateService: DatePickerService,
    public spinnerService: SpinnerService,
    private userService: UserFakeService,
    public router: Router
  ) {
    this.form = this.dateService.createForm();
  }

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
  private validation(): void {
    const formOptions: AbstractControlOptions = {
      validators: ValidatorField.MustMatch('password', 'confirmePassword'),
    };

    this.form = this.fb.group(
      {
        nomeCompleto: ['', [Validators.required, Validators.minLength(4)]],
        email: ['', [Validators.required, Validators.email]],
        date: ['', [Validators.required, this.validateAge.bind(this)]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmePassword: ['', Validators.required],
        termo: [false, Validators.requiredTrue],
      },
      formOptions
    );
  }

  // Deve validar a idade somente quando maior de 18 anos
  validateAge(control: AbstractControl): { [key: string]: any } | null {
    const birthDate = new Date(control.value);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();

    if (age < 18) {
      this.showAgeError = true;
      return { ageInvalid: true };
    } else {
      this.showAgeError = false;
      return null;
    }
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

  // Deve chamar as funções showErrorForRequiredFields e toast.errorRegistration se houver campos inválidos
  private handleInvalidForm(): void {
    this.showErrorForRequiredFields();
    this.toast.errorRegistration(
      'Erro ao se cadastrar!',
      'Corrija os erros abaixo',
      'error'
    );
  }

  // Deve chamar  toast.errorRegistration se houver erros inesperados no cadastro
  private handleRegistrationError(error: any): void {
    this.toast.errorRegistration(
      'Erro no cadastro!',
      'Por favor, tente novamente',
      'error'
    );
    console.error('Erro ao cadastrar', error);
  }

  // Deve esconder o spinner e chamar toast.confirmRegistration se o cadastro for válido
  private handleRegistrationComplete(): void {
    setTimeout(() => {
      this.spinnerService.hide();
      this.toast.confirmRegistration(
        'Cadastro realizado',
        'A <strong>confirmação</strong> do seu <strong>cadastro</strong> será enviada pelo <strong>e-mail associado</strong> à sua nova conta',
        'confirmation'
      );
    }, 2000);
  }

  // Deve chamar o spinner e cadastrar o usuário válido e retornar erro caso o usuário seja inválido
  registerUser(): void {
    if (this.form.invalid) {
      this.handleInvalidForm();
      return;
    }

    this.spinnerService.show();
    const user = { ...this.form.value };

    this.userService.register(user).subscribe({
      error: (error) => this.handleRegistrationError(error),
      complete: () => this.handleRegistrationComplete(),
    });
  }
}
