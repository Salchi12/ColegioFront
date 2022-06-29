import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { GrabarAlumnoComponent } from './components/grabar-alumno/grabar-alumno.component';


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
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }