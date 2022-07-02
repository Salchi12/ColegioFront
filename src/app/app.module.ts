import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';

import { HttpClientModule } from '@angular/common/http';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { AppRoutingModule } from './app-routing.module';
import { GrabarAlumnoComponent } from './components/grabar-alumno/grabar-alumno.component';
import { FormsModule } from '@angular/forms';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { GrabarProfesorComponent } from './components/grabar-profesor/grabar-profesor.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    NavegacionComponent,
    GrabarAlumnoComponent,
    ProfesoresComponent,
    GrabarProfesorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
