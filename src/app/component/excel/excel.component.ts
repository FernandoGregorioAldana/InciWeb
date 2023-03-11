import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css']
})
export class ExcelComponent {


//se declaran los datos a usar y el nombre del archivo a descargar
getData:any=[];
FileName= 'Incidencias.xlsx'


form = new FormGroup({
  nombre: new FormControl('', Validators.required),
  
})


/*en el contructor se inyectan los servicios o los componentes de los cuales mandaras a llamar metodos creados
o funciones que contenga*/
constructor(private userservices: UserService){}


  //Aqui se obtienen los datos que tienen las incidencias
  ngOnInit(): void{
    this.userservices.getDate().subscribe((data:any) =>{
      this.getData=data
      console.log(this.getData)
    })
  }
 
  /*en esté metodo creado se obtiene el id de la tabla creada en el archivo html para poder acomodar los
  datos en un una hoja de excel y asi descargar el archivo*/
  exportexcel(): void{
    let element = document.getElementById('excel')
    const ws:XLSX.WorkSheet = XLSX.utils.table_to_sheet(element!)
    const wb: XLSX.WorkBook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Incidencias')
    XLSX.writeFile(wb,this.FileName)
  }


}
