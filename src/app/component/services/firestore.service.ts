import { Component, Injectable, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
    providedIn: 'root'
  })
  export class FirestoreService {
  
    /*en el contructor se inyectan los servicios o los componentes de los cuales mandaras a llamar metodos creados
    asi como las funciones en caso de mandar a llamar bibliotecas u frameworks instalados en angular (firestore, boostrap)*/
    constructor(public database: AngularFirestore, private firestore: AngularFirestore) { }
  
    //Funcion de firebase que sirve para crear un nuevo documento en la base de datos y agregar datos
    createDoc(data: any, path: string, id: string) {
        const collection = this.database.collection(path);
        return collection.doc(id).set(data);
    }
    
    //Funcion de firebase que sirve para obtener un documento ya creado y asi leer sus datos 
    getDoc<tipo>(path: string, id: string) {
      const collection = this.database.collection<tipo>(path);
      return collection.doc(id).valueChanges();
    }
  
    //Funcion que servira para eliminar un documento creado.
    deleteDoc(path: string, id: string) {
      const collection = this.database.collection(path);
      return collection.doc(id).delete();
    }
  
    //Funcion que servira para actualizar un documento al cambiar un dato en la plataforma
    updateDoc(data: any, path: string, id: string) {
      const collection = this.database.collection(path);
      return collection.doc(id).update(data);
    }
  

    //obtendra el id del usuario
    getId() {
      return this.database.createId();
    }
    

    //obtendra una coleccion de firebase
    getCollection<tipo>(path: string) {
      const collection = this.database.collection<tipo>(path);
      return collection.valueChanges();
    }
  
    //se puede obtener una colleccion mediante una consulta  
    getCollectionQuery<tipo>(path: string, parametro: string, condicion: any, busqueda: string) {
      const collection = this.database.collection<tipo>(path, 
        ref => ref.where( parametro, condicion, busqueda));
      return collection.valueChanges();
    }
  
    //obtiene toda la coleccion con parametros especificos y ordenados
    getCollectionAll<tipo>(path:string, parametro: string, condicion: any, busqueda: string, startAt: any) {
      if (startAt == null) {
        startAt = new Date();
      }
      const collection = this.database.collectionGroup<tipo>(path, 
        ref => ref.where( parametro, condicion, busqueda)
                  .orderBy('fecha', 'desc')
                  .limit(1)
                  .startAfter(startAt)
        );
      return collection.valueChanges();
    }
  
    getCollectionPaginada<tipo>(path: string, limit: number, startAt: any) {
      if (startAt == null) {
        startAt = new Date();
      }
      const collection = this.database.collection<tipo>(path, 
        ref => ref.orderBy('fecha', 'desc')
                  .limit(limit)
                  .startAfter(startAt)
        );
      return collection.valueChanges();
    }
  
  
  
  
  
  
  
  }
  