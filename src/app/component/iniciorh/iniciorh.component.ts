import { Component} from '@angular/core';
import { UserService } from '../services/user.service';
import { Auth} from "@angular/fire/auth";

@Component({
  selector: 'app-iniciorh',
  templateUrl: './iniciorh.component.html',
  styleUrls: ['./iniciorh.component.css']
})
export class IniciorhComponent {
  //se obtienen los datos del usuario que esta logeado actualmente
  user$ = this.userService.currentUserProfile$;

  //en el contructor se inyectan los servicios o los componentes de los cuales mandaras a llamar metodos creados o funciones
  constructor(private auth: Auth, private userService: UserService) { }

  ngOnInit(): void {
  }

  //Está función mandara a llamar un metodo el cual servira para cerrar sesión
  salir() {
      
      return this.auth.signOut();
  }
}
