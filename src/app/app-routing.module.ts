import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { GrabarAlumnoComponent } from './components/grabar-alumno/grabar-alumno.component';
import { GrabarProfesorComponent } from './components/grabar-profesor/grabar-profesor.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/alumno',
    pathMatch: 'full'
  },
  {
    path: 'alumno/listar',
    component: AlumnosComponent
  },
  {
    path: 'alumno/agregar',
    component: GrabarAlumnoComponent,
  },

  {
    path: 'alumno/editar/:id',
    component: GrabarAlumnoComponent,
  },
  {
    path: 'alumno/eliminar/{id}',
    component: AlumnosComponent,
  },
  {
    path: 'profesor/listar',
    component: ProfesoresComponent
  },
  {
    path: 'profesor/agregar',
    component: GrabarProfesorComponent,
  },

  {
    path: 'profesor/editar/:id',
    component: GrabarProfesorComponent,
  },
  {
    path: 'profesor/eliminar/{id}',
    component: ProfesoresComponent,
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }