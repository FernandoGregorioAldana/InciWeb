import { Component } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-subdirec',
  templateUrl: './subdirec.component.html',
  styleUrls: ['./subdirec.component.css']
})
export class SubdirecComponent {
//se obtienen los datos del usuario que esta logeado actualmente
user$ = this.userService.currentUserProfile$;

//este constructor sirve para inyectar los servicios que se usaran en este componente
constructor(private userService: UserService) { }

}
