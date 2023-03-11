import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit {

//se declara la variable para poder hacer uso de ella
email : string='';

//en el contructor se inyectan los servicios o los componentes de los cuales mandaras a llamar metodos creados
  constructor(
    private userService: UserService, private toastr: ToastrService, private router:Router
){}


  ngOnInit(): void {
    
  }
  //Alerta que notifica que todo salio correcto
  showsucces() {
    this.toastr.success('Revisa tus ultimos correos :)', 'Correo enviado!');
  }
  //Alerta de error en caso de que el corre no exista
  showErr(){
    this.toastr.error('El usuario ya existe', 'Major Error', {
      timeOut: 3000,
    });
  }
  /*se crea el metodo "recuperar" dentro del cual se mandara a llamar el metodo "recuperar" que fue creado
  dentro del "UserService, el cual solo obtendra el email de un usuario registrado y mandara un correo a tu
  bandeja */
  recuperar(){
    this.userService.recuperar(this.email);
    this.email='';
      this.showsucces();
      this.router.navigate(['/iniciosesion'])    
}
}