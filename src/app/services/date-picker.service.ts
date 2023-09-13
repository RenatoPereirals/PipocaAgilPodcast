import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class DatePickerService {
  constructor(private formBuilder: FormBuilder) {}

  createForm(): FormGroup {
    return this.formBuilder.group({
      date: ['', [Validators.required, this.dateValidator]],
    });
  }

  dateValidator(control: any): { [key: string]: boolean } | null {
    // Validação de formato DD/MM/AAAA
    const datePattern = /^(\d{2})\/(\d{2})\/(\d{4})$/;

    if (!datePattern.test(control.value)) {
      return { invalidDatePattern: true };
    }

    // Validação de data real
    const parts = control.value.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      return { invalidDate: true };
    }

    const maxDayOfMonth = new Date(year, month, 0).getDate();

    if (day < 1 || day > maxDayOfMonth || month < 1 || month > 12) {
      return { invalidDate: true };
    }

    return null;
  }
}
