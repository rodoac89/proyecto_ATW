import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class AppFormsComponent {

  countries: string[];


  constructor() {
    this.countries = [];
  }

  async getCountries(){

    const result = await fetch('https://restcountries.com/v3.1/all');
    const c = (await result.json()) as any[];
    this.countries = c.map(x => x.name.common);

  }



}
