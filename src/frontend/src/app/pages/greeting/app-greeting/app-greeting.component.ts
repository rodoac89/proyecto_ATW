import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-app-greeting',
  templateUrl: './app-greeting.component.html',
  styleUrl: './app-greeting.component.scss'
})
export class AppGreetingComponent {

  nombre: string;
  name_id: string;
  people: any[];
  peopleFormGroup = new FormGroup({
    personControl: new FormControl('', [Validators.required]),

  });


  constructor() {
    this.nombre = "";
    this.name_id = "";
    this.people = [];
    this.getPeople();
    
  }

  async getPeople(){
    const result = await fetch('http://localhost:8000/api/core/get/Personas/');

    const response = (await result.json()) as any[];
    this.people = response;
    console.log(this.people);
  }

  async getPerson(){
    let person_id;
    console.log(person_id=this.peopleFormGroup.controls.personControl.value)
    const result = await fetch(
      'http://localhost:8000/api/core/get/Persona/'+person_id+'/');

      const c = await result.json();
      this.nombre = await c.nombre;

  }

}
