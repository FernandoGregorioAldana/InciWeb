import { Injectable } from "@angular/core";
import * as firebase from 'firebase/app';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, authState, UserCredential, updateProfile, UserInfo, user,} from "@angular/fire/auth";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Route, Router } from '@angular/router';
import { RegistroComponent } from "../registro/registro.component";
import { Datos, profile } from 'src/app/models';
import { FirestoreService } from "./firestore.service";
import { Subscription } from 'rxjs';
import {collection, doc, docData, Firestore, getDoc, setDoc, updateDoc, collectionData} from '@angular/fire/firestore';
import { filter, from, map, Observable, of, switchMap } from 'rxjs';
import {getDownloadURL, ref, Storage, uploadBytes} from '@angular/fire/storage';

import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";

//este import no se usa, pero si en un futuro se necesita con estos datos podrian realizar el acceso por roles
//import { RoleValid } from "./helper/RolValid";


@Injectable({
    providedIn: 'root'
})
  //en este archivo que contendra todos los servicios que se usaran.
export class UserService{

//se declara una variable la cual guardara los datos del usuario que estan ya almacenados 
 public user$: Observable<Datos |null |undefined>;

  currentUser$ = authState(this.auth);
  //en esta estructura se manda a llamar la estructura del interface donde se guardaran u obtendran datos 
  //con los metodos que se realizan
  datos : Datos ={
    id: '',
    nombre: '',
    apellido: '',
    area: '',
    email: '',
    noEmpleado: '',
    tel: '',
    rfc: '',
    image: '',
    password: '',
  } 
  
    /*en el contructor se inyectan los servicios o los componentes de los cuales mandaras a llamar metodos creados
    asi como las funciones en caso de mandar a llamar bibliotecas u frameworks instalados en angular (firestore, boostrap)*/
    constructor(private afs: AngularFirestore, private firestore: Firestore, private auth: Auth, private fireauth: AngularFireAuth, private router:Router, private firestoreService: FirestoreService, private storage: Storage ) {
      
      //este metodo servira para obtener los datos registrados que contiene el usuario actual
      this.user$ = this.fireauth.authState.pipe(
        switchMap((user) => {
          if (user) {
            return this.afs.doc<Datos>(`UserServerP/${user.uid}`).valueChanges();
          }
          return of(null);
        })
      );
    
    }




    // metodo para recuperar contraseña el cual mandara un correo al email registrado
    recuperar(email : string) {
        this.fireauth.sendPasswordResetEmail(email).then(() => {
        }, err => {
          alert('Something went wrong');
        })
    }
    // registrar usuario
    register (datos: Datos){
        return this.fireauth.createUserWithEmailAndPassword (datos.email, datos.password)
        /*.then( res => {
            alert('Registration Successful');
            this.SendVerficationEmail(res.user);

          }, err => {
            alert(err.message);
          })*/
        }

    /*  register(email:string, password:string){
          return this.fireauth.createUserWithEmailAndPassword(email,password);
        } */



    //metodo para iniciar sesion
    login({email, password}: any){
        return signInWithEmailAndPassword(this.auth, email, password);


    }

    //metodo para cerrar sesión
    logout() {
      return this.auth.signOut();
      
    }
  

    
      //metodo para enviar la verificación por email
    SendVerficationEmail(user: any){



        this.fireauth.currentUser.then(u => u?.sendEmailVerification())
    
          .then(() =>{

    
          }, (err: any) =>{
    
              alert('Ha ocurrido un problema.');
    
          })
    
    
    
      }

      /*estado de autentificacion
      get authenticated():boolean {
        return this.user !=null;  //true ó false
      } 



      //usuario actual
      get currentUser(): Observable<firebase.User | null> {
        return this.user;
      }*/

/*
      async getUid() {
        const user = await this.auth.currentUser;
        if (user === null) {
          return null;
        } else {
           return user.uid;
        }
     }





    stateAuth() {
      return this.fireauth.authState;
   }




 
   async getInfoUser() {
       const uid = await this.getUid();
       const path = 'UserServerP';  
       this.firestoreService.getDoc<Datos>(path, uid!).subscribe( res => {
             if (res !== undefined) {
                   this.datos = res;
                   // console.log('datosCliente ->' , this.datosCliente);
             }
       });
   }

*/

//metodo para obtener los datos que se almacenan en el documento de "incidencias" en firebase 
getDate(): Observable<any[]>{
  const ref = collection(this.firestore, 'Incidencias');
  return collectionData(ref, {idField: 'id'}) as Observable<any>
}





//metodo para obtener los datos que tiene el usuario que inicio sesion actualmente

   get currentUserProfile$(): Observable<profile | null> {
    return this.currentUser$.pipe(
      switchMap((user) => {
        if (!user?.uid) {
          return of(null);
        }

        const ref = doc(this.firestore, 'UserServerP', user?.uid);
        return docData(ref) as Observable<profile>;
      })
    );
  }

  //metodo para agregar los datos del usuario registrado en el documento llamado "UserServerP"
  addUser(user: profile): Observable<void> {
    const ref = doc(this.firestore, 'UserServerP', user.id);
    return from(setDoc(ref, user));
  }

  //metodo que servira para el perfil de usuario cuando se requiera cambiar algun dato
  updateUser(user: profile): Observable<void> {
    const ref = doc(this.firestore, 'UserServerP', user.id);
    return from(updateDoc(ref, { ...user }));
  }



  //metodo que funcionara para subir una nueva imagen a la plataforma
    uploadImage(image: File, path: string): Observable<string> {
    const storageRef = ref(this.storage, path);
    const uploadTask = from(uploadBytes(storageRef, image));
    return uploadTask.pipe(switchMap((result) => getDownloadURL(result.ref)));
  }




 /* private updateUserData(user: Datos) {
    const userRef: AngularFirestoreDocument<Datos> = this.afs.doc(
      `UserServerP/${user.uid}`
    );

    const data: Datos= {
      uid: user.uid,
      email: user.email,
      //rol: user.rol,
      nombre: user.nombre,
      apeido: user.apeido,
      area: user.area,
      noEmpleado: user.noEmpleado,
      telefono: user.telefono,
      rfc: user.rfc,
      foto: user.foto,
      password: user.password
    };
    return userRef.set(data, { merge: true });
  
}

*/
  //este metodo esta comentado ya que no fue usado, pero podria utilizarse para alguna posible actualizacion    
  //sirve para definir los roles que tendra la plataforma y verificara si el usuario cuenta con ese
  //rol dentro de firebase
  ///// Role-based Authorization //////
  /*
  //estos metodos permitiran definir que podra hacer cada usuario definido segun su rol
  //en este caso todos los usuarios tienen todos los permisos
  //los roles se encuentran en "models.ts"


  canRead(user: Datos): boolean {
    const allowed = ['ServiorPublico', 'Jefedecarrera', 'Recursoshumanos']
    return this.checkAuthorization(user, allowed)
  }



  canEdit(user: Datos): boolean {
    const allowed = ['ServiorPublico', 'Jefedecarrera', 'Recursoshumanos']
    return this.checkAuthorization(user, allowed)
  }

  canDelete(user: Datos): boolean {
    const allowed = ['ServiorPublico','Jefedecarrera', 'Recursoshumanos']
    return this.checkAuthorization(user, allowed)
  }



  //Este metodo funciona para verificar el rol que tiene el usuario actual
  private checkAuthorization(user: Datos, allowedRoles: string[]): boolean {
    if (!user) return false
    for (const Rol of allowedRoles) {
      if ( user.rol??[Rol] ) {
        return true
      }
    }
    return false
  }
*/

}