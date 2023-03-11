import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { ToastrService } from 'ngx-toastr';
import { IncidenciaEco } from 'src/app/models';
import { FirestoreService } from '../services/firestore.service';
import { incidenciaService } from '../services/incidencia.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sueldo',
  templateUrl: './sueldo.component.html',
  styleUrls: ['./sueldo.component.css']
})
export class SueldoComponent {
//se obtienen los datos del usuario que esta logeado actualmente
user$ = this.userService.currentUserProfile$;
//Form para recibir elementos de la incidencia
formSueldo: FormGroup;
ahora: any;
deshabilitar: any;
fechaSolicitud: string | undefined;

constructor( private fb: FormBuilder, private _incidenciaService: incidenciaService,
  private userService: UserService,  private firestore: FirestoreService 
  ,private toastr: ToastrService, private storage: AngularFireStorage, public inciser:incidenciaService){

  this.formSueldo = this.fb.group({
    fechaSolicitada: ['',Validators.required],
    fechaSolicitud: ['',Validators.required],
    area: ['',Validators.required],
    nombre: ['',Validators.required],
    apellido: ['',Validators.required],
    email: ['', Validators.required],
    noEmpleado: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
    Jefeinmediato: ['', Validators.required],
    tipoIncidencia: ['', Validators.required],
    firma: ['', Validators.required]
  })

  const datePite = new DatePipe('en-Us')
    this.ahora = datePite.transform(new Date(), 'yyy-MM-dd')

}
ngOnInit(): void{}
//Restrigir fecha de Solicutud
RestringirFecha(){
  this.deshabilitar = this.fechaSolicitud
 }
//Codigo para almacenar imagen en firebase
SubirFoto(any: any){
const id = Math.random().toString(36).substring(2);
const file = any.target.files[0];
const filePath = `Firmas/firma_${id}`;
const ref = this.storage.ref(filePath);
const task = this.storage.upload(filePath, file); 
}

// Codigo para almacenar los datos de la Incidencia en firebase
CrearIncidencia(){
  const InciEco: IncidenciaEco ={
    email: this.formSueldo.value.email,
    nombre: this.formSueldo.value.nombre,
    tipoIncidencia: this.formSueldo.value.tipoIncidencia,
    hora: new Date(),
    fechaSolicitada: this.formSueldo.value.fechaSolicitada,
    Jefeinmediato: this.formSueldo.value.Jefeinmediato,
    fechaSolicitud: this.formSueldo.value.Jefeinmediato,
    apellido: this.formSueldo.value.apellido,
    area: this.formSueldo.value.area,
    noEmpleado: this.formSueldo.value.noEmpleado, 
    firma: this.formSueldo.value.firma, 
    firmaJI: this.inciser.selected.firmaJI,
    firmaSB:this.inciser.selected.firmaSB,
    firmaRH:this.inciser.selected.firmaRH,
    motRechazo: this.inciser.selected.motRechazo,
  }
  this._incidenciaService.GInciEco(InciEco).then(() => {
    console.log('Incidencia guardada correctamente');
    this.toastr.success('La Incidencia fue Registrada con Exito!','Incidenica Enviada');
      this.formSueldo.reset();
  }, error => {
    this.toastr.success('Ha ocurrido un Error al crear la Incidencia','Error');
      console.log(error);
  })
}
}
