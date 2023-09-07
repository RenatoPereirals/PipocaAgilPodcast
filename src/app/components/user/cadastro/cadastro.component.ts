import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ValidatorField } from 'src/app/helpers/ValidatorField';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  form!: FormGroup;
  user = {} as User;

  constructor(private fb: FormBuilder,) { }

  get f(): any { return this.form.controls; }

  ngOnInit(): void {
    this.validation();
    console.log("o valor do formulário é: " + this.form.valid);
  }

  private validation(): void {

    const formOptions: AbstractControlOptions = {
      validators: ValidatorField.MustMatch('password', 'confirmePassword')
    };

    this.form = this.fb.group({
      nomeCompleto: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmePassword: ['', Validators.required],
      termo: ['', Validators.required],
    }, formOptions);
  }

  public cssValidator(campoForm: FormControl | AbstractControl): any {
    return {'is-invalid': campoForm.errors && campoForm.touched};
  }

}
