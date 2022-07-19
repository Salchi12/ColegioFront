import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profesor } from 'src/app/models/profesor';
import { ProfesorService } from 'src/app/service/profesor.service';

@Component({
  selector: 'app-grabar-profesor',
  templateUrl: './grabar-profesor.component.html',
  styleUrls: ['./grabar-profesor.component.css']
})
export class GrabarProfesorComponent implements OnInit {

  profesor: Profesor;

  edit: boolean = false;

  constructor(
    private profesorService: ProfesorService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { 
      this.profesor ={
        idprofesores:0,
        
        nombre:'',
        apellido:'',
        direccion:'',
        fecha_nacimiento: new Date(),
      };
    }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((param)=>{
      var id = Number(param.get('id'));
      this.getProfesor(id);
      this.edit = true;
    })
  }

  getProfesor(id:Number){
    this.profesorService.getProfesor(id).subscribe((data)=>{
      this.profesor=data;
    });
  }

  saveProfesor(){
    delete this.profesor.idprofesores;

    this.profesorService.saveProfesor(this.profesor)
    .subscribe(res => {
      this.router.navigate(['/profesor/listar']);
    },
    err => console.log(err)
    )
  }
  
  updateProfesor(){
    this.profesorService.updateProfesor(this.profesor)
    .subscribe(res => {
      this.router.navigate(['/profesor/listar']);
    },
    err => console.log(err))
  }


}
