import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  API_URI = 'https://proyectointegrador-backend.herokuapp.com/alumno';
  //API_URI = 'http://localhost:8080/alumno';

  constructor(
    private http: HttpClient
  ) { }

  getAlumnos(): Observable<any> {
    return this.http.get(`${this.API_URI}/listar`);
  }

  getAlumno(id: Number): Observable<any> {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  saveAlumno(alumno: Alumno): Observable<Object> {
    return this.http.post(`${this.API_URI}/guardar`, alumno);//25:50
  }

  updateAlumno(alumno: Alumno): Observable<Object> {
    return this.http.put(`${this.API_URI}/editar/${alumno.idalumnos}`, alumno);
  }

  deleteAlumno(id: Number) {
    return this.http.delete(`${this.API_URI}/eliminar/${id}`);
  }

  

}
