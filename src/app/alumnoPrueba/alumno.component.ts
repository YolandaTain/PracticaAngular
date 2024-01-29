import { Component } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css'
})
export class AlumnoComponent {
  nombre: String = 'Yolanda';
  apellido: String = 'Tain Gutiérrez';
  edad: Number = 31;
  email: String = 'yolanda@correo.com';
  salarios: Number[] = [4000, 2000, 2500, 1250];
  activo: Boolean = true;
  linkedin: String = "https://www.linkedin.com/in/yolanda-tain-guti%C3%A9rrez-b3a90b142/";
  gitHub: String = "https://github.com/YolandaTainGitHub";
  diasTrabajados: number = 0;

  estaActivo(): Boolean {
    /*if (this.activo) {
      return 'Trabajador activo';

    } else {
      return 'Trabajador inactivo';
    }*/
    return this.activo;
  }

  mediaSueldos(): number {
    let suma: number = 0.0;
    this.salarios.forEach((element: any) => {
      suma += element;
    })
    return parseFloat((suma / this.salarios.length).toFixed(2));
  }

  aumentarDia(): void {
    this.diasTrabajados++;
    console.log("Aumenta")
  }
  
  disminuirDia(): void {
    this.diasTrabajados--;
    console.log("Disminuye")
  }

}


