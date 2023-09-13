import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AbstractControlOptions,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { ValidatorField } from 'src/app/helpers/ValidatorField';
import { User } from 'src/app/models/User';
import { DatePickerService } from 'src/app/services/date-picker.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  passwordVisible = false;
  imgShow = false;
  checked = false;

  imageFechadaUrl: string = '../../../../assets/image/Hide.png';
  imageAbertaUrl: string = '../../../../assets/image/show.png';

  form!: FormGroup;
  user = {} as User;

  constructor(
    private fb: FormBuilder,
    private toast: ToastService,
    private dateService: DatePickerService
  ) {
    this.form = this.dateService.createForm();
  }

  get f(): any {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.validation();
  }

  confirmRegistration(): void {
    this.toast.confirmRegistration();
  }

  errorRegistration(): void {
    this.toast.errorRegistration();
  }

  showErrorForRequiredFields() {
    Object.keys(this.form.controls).forEach((field) => {
      const control = this.form.get(field);

      if (control?.hasError('required') && !control.touched) {
        control.markAsTouched();
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
        date: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmePassword: ['', Validators.required],
        termo: [false, Validators.requiredTrue],
      },
      formOptions
    );
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
}
