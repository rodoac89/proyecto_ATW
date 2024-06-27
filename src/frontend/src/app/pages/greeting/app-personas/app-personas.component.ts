import { Component } from '@angular/core';
import { SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-app-personas',
  templateUrl: './app-personas.component.html',
  styleUrl: './app-personas.component.scss'
})
export class AppPersonasComponent {

  displayedColumns = ['id', 'nombre', 'f_nacimiento', 'ciudad', 'avatar', 'edit'];
  dataSource: any[];
  header: HttpHeaders = new HttpHeaders();

  constructor(private http:HttpClient){
    this.dataSource = [];
    this.getPeople();
    this.header.append('Content-Type', 'application/json');
  }

  async getPeople(){
    const result = await fetch('http://localhost:8000/api/core/get/Personas/');

    const response = (await result.json()) as any[];
    this.dataSource = response;
  }

  async deletePerson(id: any){
    
    let response = this.http
    .delete(`http://localhost:8000/api/core/delete/Persona/${id}/`).subscribe(
      (val) => {
          console.log("DELETE call successful value returned in body", 
                      val);
      },
      response => {
          console.log("DELETE call in error", response);
      },
      () => {
          console.log("The DELETE observable is now completed.");
      });
    console.log(response);



  }

  alertDeletePerson(id: any, name:string){
    console.log(name)
    Swal.fire({
      title: '¡Precaución!',
      text: `¿Está seguro que desea eliminar a ${name}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      confirmButtonColor: 'crimson',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.value) {
        this.deletePerson(id)
      } 
    });
      
    
  }



}

