import { Component, OnInit } from '@angular/core';
import { ProfesorService } from 'src/app/service/profesor.service';

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  profesorLista:any = [];

  constructor(
    private profesorService:ProfesorService
  ) { }

  ngOnInit(): void {

    this.profesorService.getProfesores()
    .subscribe(
      data => {
        this.profesorLista = data;
        console.log(data);
      })
  }

  deleteProfesor(id: Number){
    this.profesorService.deleteProfesor(id)
    .subscribe(
      err => console.log(err));
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
          title: "Lista de profesores",
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
    var dd = this.generateRows(this.profesorLista);
    pdfMake.createPdf(dd).download();
  }

}
