import { Component } from '@angular/core';

interface Months {
  month: string;
}

interface Years {
  year: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'form';
  months: Months[];
  selectedMonth: Months;
  years: Years[];
  selectedYear: Years;
  val: string;
  numInputs: number;
  firstName: string;
  lastName: string;
  middleInitial: string;

  constructor() {
    this.months = [
      { month: '01' },
      { month: '02' },
      { month: '03' },
      { month: '04' },
      { month: '05' },
      { month: '06' },
      { month: '07' },
      { month: '08' },
      { month: '09' },
      { month: '10' },
      { month: '11' },
      { month: '12' },
    ];

    this.years = [
      { year: '2021' },
      { year: '2022' },
      { year: '2023' },
      { year: '2024' },
      { year: '2025' },
      { year: '2026' },
      { year: '2027' },
    ];
  }
}
