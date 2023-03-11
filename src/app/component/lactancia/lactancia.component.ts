import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { ToastrService } from 'ngx-toastr';
import { IncidenciaLac } from 'src/app/models';
import { FirestoreService } from '../services/firestore.service';
import { incidenciaService } from '../services/incidencia.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-lactancia',
  templateUrl: './lactancia.component.html',
  styleUrls: ['./lactancia.component.css']
})
export class LactanciaComponent {
//se obtienen los datos del usuario que esta logeado actualmente
user$ = this.userService.currentUserProfile$;
//Form para recibir elementos de la incidencia
formLac: FormGroup;
  ahora: any;
  deshabilitar: any;
  fechaSolicitud: string | undefined;
constructor( private fb: FormBuilder, private _incidenciaService: incidenciaService,
  private userService: UserService,  private firestore: FirestoreService 
  ,private toastr: ToastrService, private storage: AngularFireStorage, public inciser:incidenciaService){

  this.formLac = this.fb.group({
    fechaSolicitada: ['',Validators.required],
    fechaSolicitadaFinal: ['',Validators.required],
    area: ['',Validators.required],
    nombre: ['',Validators.required],
    apellido: ['',Validators.required],
    email: ['', Validators.required],
    noEmpleado: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
    Jefeinmediato: ['', Validators.required],
    tipoIncidencia: ['', Validators.required],
    firma: ['',Validators.required]
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
const filePath = `Firmas/firmaServidor_${id}`;
const ref = this.storage.ref(filePath);
const task = this.storage.upload(filePath, file); 
}

// Codigo para almacenar los datos de la Incidencia en firebase
CrearIncidencia(){
  const InciLac: IncidenciaLac ={
    email: this.formLac.value.email,
    nombre: this.formLac.value.nombre,
    tipoIncidencia: this.formLac.value.tipoIncidencia,
    hora: new Date(),
    fechaSolicitada: this.formLac.value.fechaSolicitada,
    fechaSolicitadaFinal: this.formLac.value.fechaSolicitadaFinal,
    Jefeinmediato: this.formLac.value.Jefeinmediato,
    fechaSolicitud: this.formLac.value.fechaSolicitud,
    apellido: this.formLac.value.apellido,
    area: this.formLac.value.area,
    noEmpleado: this.formLac.value.noEmpleado,  
    firma: this.formLac.value.firma,
    firmaJI: this.inciser.selected.firmaJI,
    firmaSB:this.inciser.selected.firmaSB,
    firmaRH:this.inciser.selected.firmaRH,
    motRechazo: this.inciser.selected.motRechazo,
  }
  this._incidenciaService.GInciLac(InciLac).then(() => {
    console.log('Incidencia guardada correctamente');
    this.toastr.success('La Incidencia fue Registrada con Exito!','Incidenica Enviada');
      this.formLac.reset();

  }, error => {
    this.toastr.success('Ha ocurrido un Error al crear la Incidencia','Error');
      console.log(error);
  })
}
}

