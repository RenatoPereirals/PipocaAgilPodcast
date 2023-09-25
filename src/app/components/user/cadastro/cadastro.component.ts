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
  imgShow = false;
  checked = false;
  showAgeError = false;

  imageFechadaUrl: string = '../../../../assets/image/Hide.png';
  imageAbertaUrl: string = '../../../../assets/image/show.png';

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
    console.log(this.spinnerService.showSpinnerSubject);
    this.spinnerService.show();
    console.log(this.spinnerService.showSpinnerSubject);
    this.spinnerService.hide();
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

  // Função de validação de idade personalizada
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

  registerUser(): void {
    if (this.form.invalid) {
      this.showErrorForRequiredFields();
      this.toast.errorRegistration(
        'Erro ao se cadasrar!',
        'Corrija os erros abaixo',
        'error'
      );

      return;
    }
    this.spinnerService.show();

    this.user = { ...this.form.value };

    this.userService.register(this.user).subscribe({
      next: () => {},
      error: (error) => {
        this.toast.errorRegistration(
          'Erro ao se cadasrar!',
          'Corrija os erros abaixo',
          'error'
        );
        console.log('Erro ao cadastrar', error);
      },
      complete: () => {
        setTimeout(() => {
          this.spinnerService.hide();
          this.toast.confirmRegistration(
            'Cadastro realizado',
            'A <strong>confirmação</strong> do seu <strong>cadastro</strong> será enviado pelo <strong>e-mail associado</strong> à sua nova conta',
            'confirmation'
          ); // Exiba o toast após a conclusão do spinner.
        }, 2000);
      },
    });
  }
}
