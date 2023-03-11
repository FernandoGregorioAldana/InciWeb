//las interfaces ayudan a definir la estructura de métodos y propiedades, no su implementación.
//esta interface define la estructura de como se guardaran los datos al registrar un nuevo usuario
export interface Datos {
    id: string;
    nombre?: string;
    apellido?: string;
    area?: string;
    email: string;
    noEmpleado?: string;
    //rol?: Rol;
    tel?: string;
    rfc?: string;
    image?: string;
    password: string ;


}


//en esta interface se podran ver los roles que se podrian definir dentro de la plataforma
//export type Rol = 'ServidorPublico' | 'Jefedecarrera' | 'Recursoshumanos';

/*export interface Rol{
    ServiorPublico: boolean;
    Jefedecarrera: boolean;
    Recursoshumanos: boolean;
}
*/

//interface de perfil donde definira la estructura que se mandara a llamar de firebase, para poder asignarla
//a los datos que mostrara el perfil de usuario
export interface profile{
    id: string;
    nombre?: string;
    apellido?: string;
    area?: string;
    email?: string;
    noEmpleado?: string;
    tel?: string;
    rfc?: string;
    image?: string;


}


/*archivo excel */
export interface excel{
  incidencias: incidencias[];
}
export interface incidencias{
  tipoIncidencia: string;
  nombre: string;
  apellido: string;
  area: string;
  fecha: string;
  fechaSolicitada: string;
  fechaSolicitud: string;
}



export class Incidencias {
  id?: string;
  email: string;
  nombre: string;
  tipoIncidencia: string;
  hora: Date;
  horaInicial: string;
  horaFinal: string;
  fechaSolicitada: string;
  Jefeinmediato: string;
  fechaSolicitud: string;
  apellido: string;
  area: string;
  noEmpleado: string;
  firma: string;
  firmaJI: string;
  firmaSB: string;
  firmaRH: string;
  motRechazo: string;

constructor(email: string, nombre: string, tipoIncidencia: string,
   horaInicial: string, horaFinal: string, fechaSolicitada: string, 
   Jefeinmediato: string, fechaSolicitud:string, apellido: string,
    area: string, noEmpleado: string, firma: string, firmaJI: string,
    firmaSB: string, firmaRH: string, motRechazo: string){
  
  this.email = email;
  this.nombre = nombre;
  this.tipoIncidencia = tipoIncidencia;
  this.hora = new Date();
  this.horaInicial = horaInicial;
  this.horaFinal = horaFinal;
  this.fechaSolicitada = fechaSolicitada;
  this.Jefeinmediato = Jefeinmediato;
  this.fechaSolicitud = fechaSolicitud;
  this.apellido = apellido;
  this.area = area;
  this.noEmpleado = noEmpleado;
  this.firma = firma;
  this.firmaJI = firmaJI;
  this.firmaSB = firmaSB;
  this.firmaRH = firmaRH;
  this.motRechazo = motRechazo;

}
}
export class IncidenciaMedi {
id?: string;
email: string;
nombre: string;
tipoIncidencia: string;
hora: Date;
horaInicial: string;
horaFinal: string;
fechaSolicitada: string;
Jefeinmediato: string;
fechaSolicitud: string;
apellido: string;
area: string;
noEmpleado: string;
firma: string;
receta: string;
firmaJI: string;
firmaSB: string;
firmaRH: string;
motRechazo: string;

constructor(email: string, nombre: string, tipoIncidencia: string,
 horaInicial: string, horaFinal: string, fechaSolicitada: string, 
 Jefeinmediato: string, fechaSolicitud:string, apellido: string, 
 area: string, noEmpleado: string, firma: string, receta: string,
 firmaJI: string, firmaSB: string, firmaRH: string, motRechazo: string){

this.email = email;
this.nombre = nombre;
this.tipoIncidencia = tipoIncidencia;
this.hora = new Date();
this.horaInicial = horaInicial;
this.horaFinal = horaFinal;
this.fechaSolicitada = fechaSolicitada;
this.Jefeinmediato = Jefeinmediato;
this.fechaSolicitud = fechaSolicitud;
this.apellido = apellido;
this.area = area;
this.noEmpleado = noEmpleado;
this.firma = firma;
this.receta = receta;
this.firmaJI = firmaJI;
this.firmaSB = firmaSB;
this.firmaRH = firmaRH;
this.motRechazo = motRechazo;
}
}
export class IncidenciaEco {
  id?: string;
  email: string;
  nombre: string;
  tipoIncidencia: string;
  hora: Date;
  fechaSolicitada: string;
  Jefeinmediato: string;
  fechaSolicitud: string;
  apellido: string;
  area: string;
  noEmpleado: string;
  firma: string;
  firmaJI: string;
  firmaSB: string;
  firmaRH: string;
  motRechazo: string;

constructor(email: string, nombre: string, tipoIncidencia: string,
   fechaSolicitada: string, Jefeinmediato: string, fechaSolicitud:string, apellido: string, 
   area: string, noEmpleado: string, firma: string, firmaJI: string, firmaSB: string, 
   firmaRH: string, motRechazo: string){
  
  this.email = email;
  this.nombre = nombre;
  this.tipoIncidencia = tipoIncidencia;
  this.hora = new Date();
  this.fechaSolicitada = fechaSolicitada;
  this.Jefeinmediato = Jefeinmediato;
  this.fechaSolicitud = fechaSolicitud;
  this.apellido = apellido;
  this.area = area;
  this.noEmpleado = noEmpleado;
  this.firma = firma;
  this.firmaJI = firmaJI;
  this.firmaSB = firmaSB;
  this.firmaRH = firmaRH;
  this.motRechazo = motRechazo;
}
}

export class IncidenciaLac {
  id?: string;
  email: string;
  nombre: string;
  tipoIncidencia: string;
  hora: Date;
  fechaSolicitada: string;
  fechaSolicitadaFinal: string;
  Jefeinmediato: string;
  fechaSolicitud: string;
  apellido: string;
  area: string;
  noEmpleado: string;
  firma:string;
  firmaJI: string;
  firmaSB: string;
  firmaRH: string;
  motRechazo: string;
  
constructor(email: string, nombre: string, tipoIncidencia: string,
   fechaSolicitada: string, fechaSolicitadaFinal: string, Jefeinmediato: string, apellido: string, 
   fechaSolicitud:string, area: string, noEmpleado: string, firma: string,
   firmaJI: string, firmaSB: string, firmaRH: string, motRechazo: string){
  
  this.email = email;
  this.nombre = nombre;
  this.tipoIncidencia = tipoIncidencia;
  this.hora = new Date();
  this.fechaSolicitada = fechaSolicitada;
  this.fechaSolicitadaFinal = fechaSolicitadaFinal;
  this.Jefeinmediato = Jefeinmediato;
  this.fechaSolicitud = fechaSolicitud;
  this.apellido = apellido;
  this.area = area;
  this.noEmpleado = noEmpleado;
  this.firma = firma;
  this.firmaJI = firmaJI;
  this.firmaSB = firmaSB;
  this.firmaRH = firmaRH;
  this.motRechazo = motRechazo;
}
}
export class IncidenciasOtro {
  id?: string;
  email: string;
  nombre: string;
  tipoIncidencia: string;
  hora: Date;
  horaInicial: string;
  horaFinal: string;
  fechaSolicitada: string;
  Jefeinmediato: string;
  fechaSolicitud: string;
  apellido: string;
  area: string;
  noEmpleado: string;
  motivo: string;
  firma:string;
  eviOtro: string;
  firmaJI: string;
  firmaSB: string;
  firmaRH: string;
  motRechazo: string;

constructor(email: string, nombre: string, tipoIncidencia: string, horaInicial: string, 
  horaFinal: string, fechaSolicitada: string, Jefeinmediato: string, apellido: string, 
  fechaSolicitud: string, area: string, noEmpleado: string, motivo: string, 
  firma: string, eviOtro: string, firmaJI: string, firmaSB: string, firmaRH: string, motRechazo: string){
  
  this.email = email;
  this.nombre = nombre;
  this.tipoIncidencia = tipoIncidencia;
  this.hora = new Date();
  this.horaInicial = horaInicial;
  this.horaFinal = horaFinal;
  this.fechaSolicitada = fechaSolicitada;
  this.Jefeinmediato = Jefeinmediato;
  this.fechaSolicitud = fechaSolicitud;
  this.apellido = apellido;
  this.area = area;
  this.noEmpleado = noEmpleado;
  this.motivo = motivo;
  this.firma = firma;
  this.eviOtro = eviOtro;
  this.firmaJI = firmaJI;
  this.firmaSB = firmaSB;
  this.firmaRH = firmaRH;
  this.motRechazo = motRechazo;

}
}
export class IncidenciasTarde{
id?: string;
email: string;
nombre: string;
tipoIncidencia: string;
hora: Date;
horaInicial: string;
horaFinal: string;
fechaSolicitada: string;
Jefeinmediato: string;
fechaSolicitud: string;
apellido: string;
area: string;
noEmpleado: string;
firma:string;
eviTarde: string;
firmaJI: string;
firmaSB: string;
firmaRH: string;
motRechazo: string;

constructor(email: string, nombre: string, tipoIncidencia: string, horaInicial: string, 
horaFinal: string, fechaSolicitada: string, Jefeinmediato: string, apellido: string, 
fechaSolicitud: string, area: string, noEmpleado: string, motivo: string, firma: string, 
eviTarde: string, firmaJI: string, firmaSB: string, firmaRH: string, motRechazo: string){

this.email = email;
this.nombre = nombre;
this.tipoIncidencia = tipoIncidencia;
this.hora = new Date();
this.horaInicial = horaInicial;
this.horaFinal = horaFinal;
this.fechaSolicitada = fechaSolicitada;
this.Jefeinmediato = Jefeinmediato;
this.fechaSolicitud = fechaSolicitud;
this.apellido = apellido;
this.area = area;
this.noEmpleado = noEmpleado;
this.firma = firma;
this.eviTarde = eviTarde;
this.firmaJI = firmaJI;
this.firmaSB = firmaSB;
this.firmaRH = firmaRH;
this.motRechazo = motRechazo;

}
}


export interface area{
area: string;
tipoIncidencia: string;
nombre: string;
apellido: string;

}

export interface responseInci{
  tipoIncidencia: string;
  nombre: string;
  apellido: string;
  area: string;
  fecha: string;
  fechaSolicitada: string;
  fechaSolicitud: string;
}


export var single = [
    {
      "name": "Ingenieria en sistemas",
      "value": 3
    },
    {
      "name": "Ingenieria en animación y efectos visuales",
      "value": 1
    },
    {
      "name": "Licenciatura en administración",
      "value": 2
    }
  ];
  
  export var multi = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "2010",
          "value": 7300000
        },
        {
          "name": "2011",
          "value": 8940000
        }
      ]
    },
  
    {
      "name": "USA",
      "series": [
        {
          "name": "2010",
          "value": 7870000
        },
        {
          "name": "2011",
          "value": 8270000
        }
      ]
    },
  
    {
      "name": "France",
      "series": [
        {
          "name": "2010",
          "value": 5000002
        },
        {
          "name": "2011",
          "value": 5800000
        }
      ]
    }
  ];






