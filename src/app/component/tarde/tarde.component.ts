import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { ToastrService } from 'ngx-toastr';
import { IncidenciasTarde } from 'src/app/models';
import { FirestoreService } from '../services/firestore.service';
import { incidenciaService } from '../services/incidencia.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tarde',
  templateUrl: './tarde.component.html',
  styleUrls: ['./tarde.component.css']
})
export class TardeComponent {
  user$ = this.userService.currentUserProfile$;
  //Form para recibir elementos de la incidencia
  formTarde: FormGroup;
  ahora: any;
  deshabilitar: any;
  fechaSolicitud: string | undefined;
 
  constructor( private fb: FormBuilder, private _incidenciaService: incidenciaService,
    private userService: UserService,  private firestore: FirestoreService ,
    private toastr: ToastrService, private storage: AngularFireStorage, public inciser:incidenciaService){

    this.formTarde = this.fb.group({
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
      firma: ['', Validators.required],
      eviTarde: ['', Validators.required],
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
  const filePath = `Firmas/FirmaServidor_${id}`;
  const ref = this.storage.ref(filePath);
  const task = this.storage.upload(filePath, file); 
 }
 SubirEvidencia(any: any){
  const id = Math.random().toString(36).substring(2);
  const file = any.target.files[0];
  const filePath = `PDF/EvidenciaTarde_${id}`;
  const ref = this.storage.ref(filePath);
  const task = this.storage.upload(filePath, file); 
 }

 // Codigo para almacenar los datos de la Incidencia en firebase
  CrearIncidencia(){
    const InciTarde: IncidenciasTarde ={
      email: this.formTarde.value.email,
      nombre: this.formTarde.value.nombre,
      tipoIncidencia: this.formTarde.value.tipoIncidencia,
      hora: new Date(),
      horaInicial: this.formTarde.value.horaInicial,
      horaFinal: this.formTarde.value.horaFinal,
      fechaSolicitada: this.formTarde.value.fechaSolicitada,
      Jefeinmediato: this.formTarde.value.Jefeinmediato,
      fechaSolicitud: this.formTarde.value.fechaSolicitud,
      apellido: this.formTarde.value.apellido,
      area: this.formTarde.value.area,
      noEmpleado: this.formTarde.value.noEmpleado, 
      firma: this.formTarde.value.firma, 
      eviTarde: this.formTarde.value.eviTarde,
      firmaJI: this.inciser.selected.firmaJI,
      firmaSB:this.inciser.selected.firmaSB,
      firmaRH:this.inciser.selected.firmaRH,
      motRechazo: this.inciser.selected.motRechazo,
    }
    this._incidenciaService.GInciTarde(InciTarde).then(() => {
      console.log('Incidencia guardada correctamente');
      this.toastr.success('La Incidencia fue Registrada con Exito!','Incidenica Enviada');
      this.formTarde.reset();
    }, error => {
      console.log(error);
      this.toastr.success('Ha ocurrido un Error al crear la Incidencia','Error');
      console.log(error);
    })
  }
}

