import { Component} from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-iniciojd',
  templateUrl: './iniciojd.component.html',
  styleUrls: ['./iniciojd.component.css']
})
export class IniciojdComponent {
  //se obtienen los datos del usuario que esta logeado actualmente
  user$ = this.userService.currentUserProfile$;

  //en el contructor se inyectan los servicios o los componentes de los cuales mandaras a llamar metodos creados
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  //Se crea una funcion la cual manda a llamar un metodo el cual servira para cerrar sesión
  onbutton() {
    this.userService.logout

  }
}
