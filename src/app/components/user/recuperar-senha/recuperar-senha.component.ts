import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl,
  AbstractControlOptions,
} from '@angular/forms';
import { ValidatorField } from 'src/app/helpers/ValidatorField';
import { User } from 'src/app/models/user';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.css'],
})
export class RecuperarSenhaComponent {
  passwordVisible = false;
  ConfirmPasswordVisible = false;
  imgShow = false;

  form!: FormGroup;
  user = {} as User;

  imageFechadaUrl = '../../../../assets/image/hide.png';
  imageAbertaUrl = '../../../../assets/image/remove-red-eye.png';

  constructor(private fb: FormBuilder, private toast: ToastService) {}

  get f(): any {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.validation();
  }

  errorRegistration(): void {
    this.toast.errorRegistration(
      'Erro',
      'Error ao tentar recuperar senha',
      'error'
    );
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

  private validation(): void {
    const formOptions: AbstractControlOptions = {
      validators: ValidatorField.MustMatch('password', 'confirmePassword'),
    };

    this.form = this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmePassword: ['', Validators.required],
      },
      formOptions
    );
  }

  // Altera a visibilidade da senha e altera a imagem
  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  toggleConfirmPasswordVisibility(): void {
    this.ConfirmPasswordVisible = !this.ConfirmPasswordVisible;
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
