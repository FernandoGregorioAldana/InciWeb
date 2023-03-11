import { Component, OnInit, ViewChild } from '@angular/core';
import { analyticInstance$ } from '@angular/fire/analytics';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Incidencias } from 'src/app/models';
import { FirestoreService } from '../services/firestore.service';
import { incidenciaService } from '../services/incidencia.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-rh',
  templateUrl: './rh.component.html',
  styleUrls: ['./rh.component.css']
})
export class RhComponent implements OnInit{
  //se obtienen los datos del usuario que esta logeado actualmente
user$ = this.userService.currentUserProfile$;
  displayedColumns: string[] = ['nombre', 'apellido', 'area','tipoIncidencia', 
  'fechaSolicitada','fechaSolicitud','actions','firmaJI','firmaSB','firmaRH','firma', 'motRechazo'];
  dataSource = new MatTableDataSource();
@ViewChild(MatSort) sort!: MatSort;

constructor(private userService: UserService, private router:Router, 
  firestoreservices:FirestoreService, private toast: HotToastService,
  private InciService: incidenciaService, public inciser:incidenciaService, 
  private storage: AngularFireStorage){
  
  }
  ngOnInit(){
  this.InciService.ObtINci().subscribe(res => this.dataSource.data=res);
  }
  //Codigo para almacenar imagen en firebase
  SubirFoto(any: any){
  const id = Math.random().toString(36).substring(2);
  const file = any.target.files[0];
  const filePath = `Firmas/firmaRecurosH_${id}`;
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
  
