import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/service/alumno.service';

@Component({
  selector: 'app-grabar-alumno',
  templateUrl: './grabar-alumno.component.html',
  styleUrls: ['./grabar-alumno.component.css']
})
export class GrabarAlumnoComponent implements OnInit {

  alumno:  Alumno;

  edit: boolean = false;

  constructor(
    private alumnoService: AlumnoService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute) { 
      this.alumno ={
        idalumnos: 0,
        nombre: '',
        apellido: '',
        dni: '',
        fecha_nacimiento: new Date(),
        direccion: '',
        morosos: 0,
      };
    }

  ngOnInit(): void {
    
    this.activatedRoute.paramMap.subscribe((param)=>{
      var id = Number(param.get('id'));
      this.getAlumno(id);
    })

  }

  getAlumno(id: Number){
    this.alumnoService.getAlumno(id).subscribe((data)=>{
      //this.alumno = data;
    });
  }

  saveAlumno(){
    delete this.alumno.idalumnos;

    this.alumnoService.saveAlumno(this.alumno)
    .subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/alumno/listar']);
          },
          err => console.log(err)
    )
  }

  updateAlumno(){
    this.alumnoService.updateAlumno(this.alumno)
    .subscribe(
          res => {
            this.router.navigate(['/alumno/listar'])
          },
          err => console.log(err)
    )
  }

}
