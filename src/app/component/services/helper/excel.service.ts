import { Injectable } from "@angular/core";
import { Workbook } from "exceljs";
import { excel, incidencias } from "src/app/models";
import * as fs from "file-saver";


@Injectable ({providedIn: 'root'})
export class Excelservice{
  private _worbook!: Workbook


  async downloadExcel(dataExcel: excel): Promise<void>{
    this._worbook= new Workbook();
    this._worbook.creator='FGA'
    
   await this._createIncitable(dataExcel.incidencias);

    this._worbook.xlsx.writeBuffer().then((data)=> {
      const blob= new Blob([data]);
      fs.saveAs(blob, 'Incidencias.xlsx');
    })
  
  }
  private async _createIncitable(dataincitable: incidencias[]): Promise <void>{
    //CREAMOS LA PRIMERA HOJA
    const sheet = this._worbook.addWorksheet('Incidencias');

    //ESTABLECEMOS EL ANCHO Y ESTILO DE LAS COLUMNAS
    sheet.getColumn('A').width =21;
    sheet.getColumn('B').width =21;
    sheet.getColumn('C').width =21;
    sheet.getColumn('D').width =21;
    sheet.getColumn('E').width =21;
    sheet.getColumn('F').width =21;
    sheet.getColumn('G').width =21;

    sheet.columns.forEach((column) =>{
      column.alignment={vertical:'middle', wrapText: true};
    });
    

    const headerRow = sheet.getRow(1);
    headerRow.values=['nombre', 'apellido','area', 'tipoIncidencia', 'fecha', 'fechaSolicitud', 'fechaSolicitada'];
    headerRow.font={bold:true, size: 12};


    //Insertar los datos en sus respectivas columnas
    const rowsToInsert = sheet.getRows(1,dataincitable.length)!;

    for (let index =0; index< rowsToInsert.length; index++){
      const itemData = dataincitable[index]; //obtenemos item segun el index de la iteracion (recorrido)
      const row = rowsToInsert[index]; //obtenemos la primera fila segun el index de la iteracion (recorrido)

      //los valores de item data seran asignados a "row" (fila actual en la iteracion)

      row.values = [
        itemData.nombre,
        itemData.apellido,
        itemData.area,
        itemData.tipoIncidencia,
        itemData.fecha,
        itemData.fechaSolicitud,
        itemData.fechaSolicitada,
      ];
    }
  
  }
}