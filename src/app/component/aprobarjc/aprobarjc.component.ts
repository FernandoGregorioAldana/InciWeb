import { Component, OnInit, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { FirestoreService } from '../services/firestore.service';
import { UserService } from '../services/user.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { incidenciaService } from '../services/incidencia.service';


@Component({
  selector: 'app-aprobarjc',
  templateUrl: './aprobarjc.component.html',
  styleUrls: ['./aprobarjc.component.css']
})
export class AprobarjcComponent {
//se obtienen los datos del usuario que esta logeado actualmente
user$ = this.userService.currentUserProfile$;

//este constructor sirve para inyectar los servicios que se usaran en este componente
constructor(private userService: UserService, private router:Router, firestoreservices:FirestoreService, 
  private toast: HotToastService, private InciService: incidenciaService, public inciser:incidenciaService, 
  private storage: AngularFireStorage ) { }


  displayedColumns: string[] = ['nombre', 'apellido', 'area','tipoIncidencia', 
  'fechaSolicitada','fechaSolicitud','actions','firmaJI','firma', 'motRechazo'];
dataSource = new MatTableDataSource();
@ViewChild(MatSort) sort!: MatSort;

ngOnInit(){
this.InciService.ObtINci().subscribe(res => this.dataSource.data=res);
}
//Codigo para almacenar imagen en firebase
SubirFoto(any: any){
const id = Math.random().toString(36).substring(2);
const file = any.target.files[0];
const filePath = `Firmas/firmaJefeI_${id}`;
const ref = this.storage.ref(filePath);
const task = this.storage.upload(filePath, file); 
}
Despuesdever(){
this.dataSource.sort = this.sort;
}
applyFilter(event: Event) {
const filterValue = (event.target as HTMLInputElement).value;
this.dataSource.filter = filterValue.trim().toLowerCase();
}
editarInci(element: any){
this.InciService.selected=element;
}
guardaredit(){
this.inciser.editInci(this.inciser.selected);
}
}
