import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreModule, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IncidenciaEco, IncidenciaLac, IncidenciaMedi, Incidencias,IncidenciasOtro, IncidenciasTarde } from "src/app/models";

export interface IncidenciaID extends Incidencias {id: string;}
@Injectable({
    providedIn: 'root'
})

export class incidenciaService{
  private ColeccionInci: AngularFirestoreCollection<Incidencias>;
  Incide: Observable<IncidenciaID[]>;
  public selected = {
    id:'',
    email: '',
    nombre: '',
    tipoIncidencia: '',
    hora: new Date(Date.now()),
    horaInicial: '',
    horaFinal: '',
    fechaSolicitada: '',
    Jefeinmediato: '',
    fechaSolicitud: '',
    apellido: '',
    area: '',
    noEmpleado: '',
    firma: '',
    firmaJI: '',
    firmaSB: '',
    firmaRH: '',
    motRechazo: '',

  }
    constructor(private firebase: AngularFirestore, private readonly afs: AngularFirestore){
      this.ColeccionInci = afs.collection<Incidencias>('Incidencias');
      this.Incide = this.ColeccionInci.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Incidencias;
          const id = a.payload.doc.id;
          return {id, ... data};
        }))
      );
    }

    ObtINci(){
      return this.Incide;
    }
    editInci(edit: Incidencias){
      return this.ColeccionInci.doc(edit.id).update(edit);
    }

    GInci (Ginci: Incidencias): Promise <any>{
         return this.firebase.collection('Incidencias').add(Ginci);
       }
       GInciMed (Ginci: IncidenciaMedi): Promise <any>{
        return this.firebase.collection('Incidencias').add(Ginci);
      }
       GInciEco (GIncieco: IncidenciaEco): Promise <any>{
        return this.firebase.collection('Incidencias').add(GIncieco);
      }
      GInciLac (GIncilac: IncidenciaLac): Promise <any>{
        return this.firebase.collection('Incidencias').add(GIncilac);
      }
      GInciOtro (GInciOtro: IncidenciasOtro): Promise <any>{
        return this.firebase.collection('Incidencias').add(GInciOtro);
      }
      GInciTarde (GInciTarde: IncidenciasTarde): Promise <any>{
        return this.firebase.collection('Incidencias').add(GInciTarde);
      }
      ObtInci(): Observable<any>{
        return this.firebase.collection('Incidencias').snapshotChanges();
      }
     
   }