import { Component } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
})
export class DatePickerComponent {
  days: (number | string)[] = [
    'Dia',
    ...Array.from({ length: 31 }, (_, i) => i + 1),
  ];
  months: (string | number)[] = [
    'Mês',
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  years: (number | string)[] = [
    'Ano',
    ...Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i),
  ];
  selectedDay: number | string = 'Dia';
  selectedMonth: string | number = 'Mês';
  selectedYear: number | string = 'Ano';
}
