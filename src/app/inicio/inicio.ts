import {Component, OnInit} from 'angular2/core';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import { Alumno } from '../alumnos/alumno'
import { AlumnoDetailComponent } from '../alumnos/alumno-detail';
import { AlumnoService } from '../alumnos/alumno-service';

@Component({
	selector: 'inicio',
  styleUrls: ['app/inicio/inicio.css'],
  templateUrl: 'app/inicio/inicio.html',
	directives: [AlumnoDetailComponent],
  providers: [AlumnoService]
})

export class Inicio implements OnInit {

  selectedAlumno: Alumno;
	alumnos: Alumno[];

  constructor(private _alumnoService: AlumnoService) { }

  getAlumnos() {
    this._alumnoService.getAlumnos().then(alumnos => this.alumnos = alumnos);
  }

  ngOnInit() {
    this.getAlumnos();
  }

  onSelect(alumno: Alumno) { this.selectedAlumno = alumno; }
}
