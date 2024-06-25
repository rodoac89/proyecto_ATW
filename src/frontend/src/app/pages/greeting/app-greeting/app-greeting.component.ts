import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-app-greeting',
  templateUrl: './app-greeting.component.html',
  styleUrl: './app-greeting.component.scss'
})
export class AppGreetingComponent {

  nombre: string;
  @Input() name_id: string;

  constructor() {
    this.nombre = "";
    this.name_id = "";
  }

  

  async getSaludo(){
    const result = await fetch(
      'http://localhost:8000/api/core/saludo/?id='+this.name_id);

    const c = await result.json();
    this.nombre = await c.nombre;
  }

}
