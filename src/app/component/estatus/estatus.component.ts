import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { FirestoreService } from '../services/firestore.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-estatus',
  templateUrl: './estatus.component.html',
  styleUrls: ['./estatus.component.css']
})
export class EstatusComponent {
  //se obtienen los datos del usuario que esta logeado actualmente
  user$ = this.userService.currentUserProfile$; 


//este constructor sirve para inyectar los servicios que se usaran en este componente
  constructor(private userService: UserService, private router:Router, firestoreservices:FirestoreService, private toast: HotToastService ) { }
}
