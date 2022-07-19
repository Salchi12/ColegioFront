import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../service/alumno.service';
import { RouterModule } from '@angular/router';

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumnosLista: any = [];

  constructor(
    private alumnosService: AlumnoService
  ) { }

  ngOnInit(): void {
    this.alumnosService.getAlumnos()
    .subscribe(
      data => {
        console.log("alumnos",data);
        this.alumnosLista = data;
      })
  }

  deleteAlumno(id: Number) {
    this.alumnosService.deleteAlumno(id)
    .subscribe(
      err => console.log(err));
    console.log("elimando");
  }

  buildTableBody(data, columns) {
    var body = [];

    body.push(columns);

    data.forEach(function(row) {
        var dataRow = [];

        columns.forEach(function(column) {
            dataRow.push(row[column]);
        })

        body.push(dataRow);
    });

    return body;
  }
  
  table(data, columns) {
    return {
      table: {
        headerRows: 1,
        body: this.buildTableBody(data, columns)
      }
    };
  }

  generateRows(alumnos){
    var tempObj = {}
    var tempArr = [];
    for(var i=0; i<alumnos.length; i++){
    
       tempArr.push(
         {  
           Nombre: alumnos[i].nombre,
           Apellido: alumnos[i].apellido,
           Direccion: alumnos[i].direccion
          }
      );
      var dd = {
        info:{
          title: "Lista de alumnos",
        },
        content: [
          { text: 'Listado de Alumnos', style: 'header' },
          this.table(tempArr, [ 'Nombre', 'Apellido', 'Direccion'])
        ],
        Styles: {
          header: {
            aligment: 'center',
          }}
      };
    }
    return dd;
  }
  crearPdf(){
    var dd = this.generateRows(this.alumnosLista);
    pdfMake.createPdf(dd).download();
  }
}
