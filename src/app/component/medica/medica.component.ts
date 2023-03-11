import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { ToastrService } from 'ngx-toastr';
import { IncidenciaMedi, Incidencias } from 'src/app/models';
import { FirestoreService } from '../services/firestore.service';
import { incidenciaService } from '../services/incidencia.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-medica',
  templateUrl: './medica.component.html',
  styleUrls: ['./medica.component.css']
})
export class MedicaComponent {
  user$ = this.userService.currentUserProfile$;
  //Form para recibir elementos de la incidencia
  formMedica: FormGroup;
  ahora: any;
  deshabilitar: any;
  fechaSolicitud: string | undefined;
 
  constructor( private fb: FormBuilder, private _incidenciaService: incidenciaService,
    private userService: UserService,  private firestore: FirestoreService ,
    private toastr: ToastrService, private storage: AngularFireStorage, public inciser:incidenciaService){

    this.formMedica = this.fb.group({
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
      receta: ['', Validators.required],
      
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
 SubirReceta(any: any){
  const id = Math.random().toString(36).substring(2);
  const file = any.target.files[0];
  const filePath = `PDF/RecetaMedica_${id}`;
  const ref = this.storage.ref(filePath);
  const task = this.storage.upload(filePath, file); 
 }

 // Codigo para almacenar los datos de la Incidencia en firebase
  CrearIncidencia(){
    const InciMed: IncidenciaMedi ={
      email: this.formMedica.value.email,
      nombre: this.formMedica.value.nombre,
      tipoIncidencia: this.formMedica.value.tipoIncidencia,
      hora: new Date(),
      horaInicial: this.formMedica.value.horaInicial,
      horaFinal: this.formMedica.value.horaFinal,
      fechaSolicitada: this.formMedica.value.fechaSolicitada,
      Jefeinmediato: this.formMedica.value.Jefeinmediato,
      fechaSolicitud: this.formMedica.value.fechaSolicitud,
      apellido: this.formMedica.value.apellido,
      area: this.formMedica.value.area,
      noEmpleado: this.formMedica.value.noEmpleado,
      firma: this.formMedica.value.firma,
      receta: this.formMedica.value.receta,
      firmaJI: this.inciser.selected.firmaJI,
      firmaSB:this.inciser.selected.firmaSB,
      firmaRH:this.inciser.selected.firmaRH,
      motRechazo: this.inciser.selected.motRechazo,
    }
    this._incidenciaService.GInciMed(InciMed).then(() => {
      console.log('Incidencia guardada correctamente');
      this.toastr.success('La Incidencia fue Registrada con Exito!','Incidenica Enviada');
      this.formMedica.reset();
    }, error => {
      this.toastr.success('Ha ocurrido un Error al crear la Incidencia','Error');
      console.log(error);
    })
  }
}


