import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { ToastrService } from 'ngx-toastr';
import { Incidencias } from 'src/app/models';
import { FirestoreService } from '../services/firestore.service';
import { incidenciaService } from '../services/incidencia.service';
import { UserService } from '../services/user.service';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/compat/storage';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-antes',
  templateUrl: './antes.component.html',
  styleUrls: ['./antes.component.css']
})
export class AntesComponent implements OnInit{
  user$ = this.userService.currentUserProfile$;
  //Form para recibir elementos de la incidencia
  formAntes: FormGroup;
  ahora: any;
  deshabilitar: any;
  fechaSolicitud: string | undefined;
 
  constructor( private fb: FormBuilder, private _incidenciaService: incidenciaService,
    private userService: UserService,  private firestore: FirestoreService ,
    private toastr: ToastrService, private storage: AngularFireStorage, public inciser:incidenciaService){

    this.formAntes = this.fb.group({
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
  const filePath = `Firmas/firmaServidor_${id}`;
  const ref = this.storage.ref(filePath);
  const task = this.storage.upload(filePath, file); 
 }

 // Codigo para almacenar los datos de la Incidencia en firebase
  CrearIncidencia(){
    const Inci: Incidencias ={
      email: this.formAntes.value.email,
      nombre: this.formAntes.value.nombre,
      tipoIncidencia: this.formAntes.value.tipoIncidencia,
      hora: new Date(),
      horaInicial: this.formAntes.value.horaInicial,
      horaFinal: this.formAntes.value.horaFinal,
      fechaSolicitada: this.formAntes.value.fechaSolicitada,
      Jefeinmediato: this.formAntes.value.Jefeinmediato,
      fechaSolicitud: this.formAntes.value.fechaSolicitud,
      apellido: this.formAntes.value.apellido,
      area: this.formAntes.value.area,
      noEmpleado: this.formAntes.value.noEmpleado,  
      firma: this.formAntes.value.firma,
      firmaJI: this.inciser.selected.firmaJI,
      firmaSB:this.inciser.selected.firmaSB,
      firmaRH:this.inciser.selected.firmaRH,
      motRechazo: this.inciser.selected.motRechazo,
    }
    this._incidenciaService.GInci(Inci).then(() => {
      console.log('Incidencia guardada correctamente');
      this.toastr.success('La Incidencia fue Registrada con Exito!','Incidenica Enviada');
      this.formAntes.reset();
    }, error => {
      this.toastr.success('Ha ocurrido un Error al crear la Incidencia','Error');
      console.log(error);
    })
  }
  
}
