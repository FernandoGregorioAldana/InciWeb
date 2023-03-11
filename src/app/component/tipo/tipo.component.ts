import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css']
})
export class TipoComponent {
  //con está linea de codigo obtenemos los datos del usuario actual
  user$ = this.userService.currentUserProfile$;

  //Se inyectan los servicios o componentes de los cuales se requieran mandar a llamar una estructura, metodo o funcion
  constructor(private userService: UserService) { }
}
