import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { ToastrService } from 'ngx-toastr';
import { IncidenciasOtro } from 'src/app/models';
import { FirestoreService } from '../services/firestore.service';
import { incidenciaService } from '../services/incidencia.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-otro',
  templateUrl: './otro.component.html',
  styleUrls: ['./otro.component.css']
})
export class OtroComponent {
  user$ = this.userService.currentUserProfile$;
  //Form para recibir elementos de la incidencia
  formOtro: FormGroup;
  ahora: any;
  deshabilitar: any;
  fechaSolicitud: string | undefined;
 
  constructor( private fb: FormBuilder, private _incidenciaService: incidenciaService,
    private userService: UserService,  private firestore: FirestoreService ,
    private toastr: ToastrService, private storage: AngularFireStorage, public inciser:incidenciaService){

    this.formOtro = this.fb.group({
      horaInicial: ['',Validators.required],
      horaFinal: ['', Validators.required],
      fechaSolicitada: ['',Validators.required],
      fechaSolicitud: ['',Validators.required],
      area: ['',Validators.required],
      nombre: ['',Validators.required],
      apellido: ['',Validators.required],
      email: ['', Validators.required],
      noEmpleado: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
      Jefeinmediato: ['', Validators.required],
      tipoIncidencia: ['', Validators.required],
      motivo: ['', Validators.required],
      firma: ['',Validators.required],
      eviOtro: ['',Validators.required]
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
 SubirEviOtro(any: any){
  const id = Math.random().toString(36).substring(2);
  const file = any.target.files[0];
  const filePath = `PDF/EvidenciaOtro_${id}`;
  const ref = this.storage.ref(filePath);
  const task = this.storage.upload(filePath, file); 
 }

 // Codigo para almacenar los datos de la Incidencia en firebase
  CrearIncidencia(){
    const InciOtro: IncidenciasOtro ={
      email: this.formOtro.value.email,
      nombre: this.formOtro.value.nombre,
      tipoIncidencia: this.formOtro.value.tipoIncidencia,
      hora: new Date(),
      horaInicial: this.formOtro.value.horaInicial,
      horaFinal: this.formOtro.value.horaFinal,
      fechaSolicitada: this.formOtro.value.fechaSolicitada,
      Jefeinmediato: this.formOtro.value.Jefeinmediato,
      fechaSolicitud: this.formOtro.value.fechaSolicitud,
      apellido: this.formOtro.value.apellido,
      area: this.formOtro.value.area,
      noEmpleado: this.formOtro.value.noEmpleado,  
      motivo: this.formOtro.value.motivo,
      firma: this.formOtro.value.firma,
      eviOtro: this.formOtro.value.eviOtro,
      firmaJI: this.inciser.selected.firmaJI,
      firmaSB:this.inciser.selected.firmaSB,
      firmaRH:this.inciser.selected.firmaRH,
      motRechazo: this.inciser.selected.motRechazo,
    }
    this._incidenciaService.GInciOtro(InciOtro).then(() => {
      console.log('Incidencia guardada correctamente');
      this.toastr.success('La Incidencia fue Registrada con Exito!','Incidenica Enviada');
      this.formOtro.reset();
    }, error => {
      this.toastr.success('Ha ocurrido un Error al crear la Incidencia','Error');
      console.log(error);
    })
  }
  
}