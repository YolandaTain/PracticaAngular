import { Component } from '@angular/core';
import { Alumno } from '../models/alumno.model';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent {

  alumnos: Alumno[]= [
    new Alumno(
      'Luis', 'Gómez', 'luis.gomez@correo.com', 'Gomez.Luis@correo.com',
      'luis@dominio.com', 21, [1000, 1500, 2000], true, 'linkedin-luis', 'github-luis', 31, 'Universidad 1'
    ),
    new Alumno(
      'Ana', 'Fernández', 'ana.fernandez@correo.com', 'Fernandez.Ana@correo.com',
      'ana@dominio.com', 22, [2000, 2500, 3000], false, 'linkedin-ana', 'github-ana', 32, 'Instituto 2'
    ),
    new Alumno(
      'Carlos', 'Martínez', 'carlos.martinez@correo.com', 'Martinez.Carlos@correo.com',
      'carlos@dominio.com', 23, [3000, 3500, 4000], true, 'linkedin-carlos', 'github-carlos', 33, 'Escuela 3'
    ),
    new Alumno(
      'Laura', 'Hernández', 'laura.hernandez@correo.com', 'Hernandez.Laura@correo.com',
      'laura@dominio.com', 24, [4000, 4500, 5000], false, 'linkedin-laura', 'github-laura', 34, 'Colegio 4'
    ),
    new Alumno(
      'Javier', 'Díaz', 'javier.diaz@correo.com', 'Diaz.Javier@correo.com',
      'javier@dominio.com', 25, [5000, 5500, 6000], true, 'linkedin-javier', 'github-javier', 35, 'Academia 5'
    ),
    new Alumno(
      'María', 'Rodríguez', 'maria.rodriguez@correo.com', 'Rodriguez.Maria@correo.com',
      'maria@dominio.com', 26, [6000, 6500, 7000], false, 'linkedin-maria', 'github-maria', 36, 'Instituto 6'
    ),
    new Alumno(
      'Sara', 'García', 'sara.garcia@correo.com', 'Garcia.Sara@correo.com',
      'sara@dominio.com', 27, [7000, 7500, 8000], true, 'linkedin-sara', 'github-sara', 37, 'Universidad 7'
    ),
    new Alumno(
      'Pedro', 'López', 'pedro.lopez@correo.com', 'Lopez.Pedro@correo.com',
      'pedro@dominio.com', 28, [8000, 8500, 9000], false, 'linkedin-pedro', 'github-pedro', 38, 'Escuela 8'
    ),
    new Alumno(
      'Elena', 'Fernández', 'elena.fernandez@correo.com', 'Fernandez.Elena@correo.com',
      'elena@dominio.com', 29, [9000, 9500, 10000], true, 'linkedin-elena', 'github-elena', 39, 'Colegio 9'
    ),
    new Alumno(
      'Miguel', 'Gómez', 'miguel.gomez@correo.com', 'Gomez.Miguel@correo.com',
      'miguel@dominio.com', 30, [10000, 10500, 11000], false, 'linkedin-miguel', 'github-miguel', 40, 'Academia 10'
    ),

    new Alumno(
      'Isabel', 'Martínez', 'isabel.martinez@correo.com', 'Martinez.Isabel@correo.com',
      'isabel@dominio.com', 31, [11000, 11500, 12000], true, 'linkedin-isabel', 'github-isabel', 41, 'Universidad 11'
    ),
    new Alumno(
      'Adrián', 'López', 'adrian.lopez@correo.com', 'Lopez.Adrian@correo.com',
      'adrian@dominio.com', 32, [12000, 12500, 13000], false, 'linkedin-adrian', 'github-adrian', 42, 'Escuela 12'
    )
  ];
  constructor() { }

  ngOnInit(): void {
   
  }

  estaActivo(alumno: Alumno): string {
    return alumno.activo ? 'Trabajador activo' : 'Trabajador inactivo';
  }

  mediaSueldos(alumno: Alumno): number {
    let suma: number = 0.0;
    alumno.salarios.forEach((element: any) => {
      suma += element;
    });
    return parseFloat((suma / alumno.salarios.length).toFixed(2));
  }

  aumentarDia(alumno: Alumno): void {
    alumno.diasTrabajados++;
    console.log("Aumenta");
  }

  disminuirDia(alumno: Alumno): void {
    if (alumno.diasTrabajados > 0) {
      alumno.diasTrabajados--;
      console.log("Disminuye");
    }
  }
}


