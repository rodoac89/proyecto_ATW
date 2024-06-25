import { Component } from '@angular/core';

@Component({
  selector: 'app-app-greeting',
  templateUrl: './app-greeting.component.html',
  styleUrl: './app-greeting.component.scss'
})
export class AppGreetingComponent {

  nombre: string;

  constructor() {
    this.nombre = "";
  }

  async getSaludo(){
    const result = await fetch('http://localhost:8000/api/core/saludo/');
    const c = await result.json();
    this.nombre = await c.nombre;
    console.log(this.nombre)
  }

}
