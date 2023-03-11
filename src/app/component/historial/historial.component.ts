import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { FirestoreService } from '../services/firestore.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent {
  user$ = this.userService.currentUserProfile$;

  constructor(private userService: UserService, private router:Router, firestoreservices:FirestoreService, private toast: HotToastService ) { }
}
