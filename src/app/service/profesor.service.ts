import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profesor } from '../models/profesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  API_URI = 'https://proyectointegrador-backend.herokuapp.com/profesor';
  //API_URI = 'http://localhost:8080/profesor';

  constructor(
    private http: HttpClient
  ) { }

  getProfesores(): Observable<any> {
    return this.http.get(`${this.API_URI}/listar`);
  }

  getProfesor(id: Number): Observable<any> {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  saveProfesor(profesor: Profesor): Observable<Object> {
    return this.http.post(`${this.API_URI}/guardar`, profesor);
  }

  updateProfesor(profesor: Profesor): Observable<Object> {
    return this.http.put(`${this.API_URI}/editar/${profesor.idprofesores}`, profesor);
  }

  deleteProfesor(profesorId: Number){
    return this.http.delete(`${this.API_URI}/eliminar/${profesorId}`);
  }
}
