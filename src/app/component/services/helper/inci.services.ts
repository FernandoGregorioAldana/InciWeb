import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { incidencias, excel, responseInci, area  } from 'src/app/models';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';


@Injectable({ providedIn: 'root' })

export class inciservices {

    constructor(private firestore: Firestore) {}


    getData:any=[];

/*
    getHeros(): Observable<excel> {
      return this._httpClient
        .get<responseInci[]>(
          'https://akabab.github.io/superhero-api/api/all.json'
        )
        .pipe(
          map((response) => {
            response.length = 20;
            const dataExcel: excel = {
                incidencias: this._getincidencias(response),
            };
  
            return dataExcel;
          })
        );
    }
*/
    getDate(): Observable<excel>{
      const ref = collection(this.firestore, 'Incidencias');
      return collectionData(ref, {idField: 'id'}) as Observable<any>
    }


    ngOnInit(): void{
      this.getDate().subscribe((data:excel) =>{
        this.getData=data
        console.log(this.getData((response: any[]) =>{
          return response.map((item) => ({
            nombre: item.nombre,
            apellido: item.apellido,
            area: item.area,
            tipoIncidencia: item.tipoIncidencia,
            fecha: item.fecha,
            fechaSolicitud:item.fechaSolicitud,
            fechaSolicitada:item.fechaSolicitada,
        }))
      }))
     } )
    }





}