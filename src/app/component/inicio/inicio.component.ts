import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  //Con este codigo se manda a llamar el perfil de usuario logeado 
  user$ = this.userService.currentUserProfile$;
  
  //se inyectan los servicios de los cuales se desea obtener metodos ya creados para poder mandarlos a llamar
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  //se crea una funcion que manda a llamar el moto "logout" del UserServices para poder cerrar sesión
  onbutton() {
    this.userService.logout

  }

  

}