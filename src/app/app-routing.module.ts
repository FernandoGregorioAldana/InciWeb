import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciosesionComponent } from './component/iniciosesion/iniciosesion.component';
import { RegistroComponent } from './component/registro/registro.component';
import { RecuperarComponent } from './component/recuperar/recuperar.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { PerfilComponent } from './component/perfil/perfil.component';
import { HistorialComponent } from './component/historial/historial.component';
import { TardeComponent } from './component/tarde/tarde.component';
import { MedicaComponent } from './component/medica/medica.component';
import { LactanciaComponent } from './component/lactancia/lactancia.component';
import { AntesComponent } from './component/antes/antes.component';
import { EconomicoComponent } from './component/economico/economico.component';
import { SueldoComponent } from './component/sueldo/sueldo.component';
import { OtroComponent } from './component/otro/otro.component';
import { RhComponent } from './component/rh/rh.component';
import { SubdirecComponent } from './component/subdirec/subdirec.component';
import { AdminComponent } from './component/admin/admin.component';
import { HistorialAdminComponent } from './component/historial-admin/historial-admin.component';
import { JefesComponent } from './component/jefes/jefes.component';
import { TipoComponent } from './component/tipo/tipo.component';
import { EstatusComponent } from './component/estatus/estatus.component';
import { IniciorhComponent } from './component/iniciorh/iniciorh.component';
import { IniciojcComponent } from './component/iniciojc/iniciojc.component';
import { IniciojdComponent } from './component/iniciojd/iniciojd.component';
import { IniciosejcComponent } from './component/iniciosejc/iniciosejc.component';
import { IniciosejdComponent } from './component/iniciosejd/iniciosejd.component';
import { InicioserhComponent } from './component/inicioserh/inicioserh.component';
import { AprobarjcComponent } from './component/aprobarjc/aprobarjc.component';
import { AprobardaComponent } from './component/aprobarda/aprobarda.component';
import { VerticalBarrComponent } from './component/estadisticos/grafica/vertical-barr/vertical-barr.component';
import { ExcelComponent } from './component/excel/excel.component';



const routes: Routes = [
/*En cada path se agregara el nombre que tendra la ruta y a que componente corresponde, por ejemplo en el navegadaro podremos encontrar
el componenete de registro como "registro"*/

  //componentes de la pagina antes de iniciar sesión
  {path: 'registro', component: RegistroComponent, },
  {path: 'iniciosesion', component: IniciosesionComponent},
  {path: 'recuperar', component: RecuperarComponent},
  {path: 'inicio', component: InicioComponent},

  //componentes que usaran los servidores publicos
  {path: 'perfil', component: PerfilComponent},
  {path: 'tipo', component: TipoComponent},
  {path: 'historial', component: HistorialComponent},
  {path: 'tarde', component: TardeComponent},
  {path: 'medica', component: MedicaComponent},
  {path: 'lactancia', component: LactanciaComponent},
  {path: 'antes', component: AntesComponent},
  {path: 'economico', component: EconomicoComponent},
  {path: 'sueldo', component: SueldoComponent},
  {path: 'otro', component: OtroComponent},
  {path: 'estatus', component: EstatusComponent},


  //componentes de los que haran uso los jefes de carrera
  {path: 'iniciosejd', component: IniciosejdComponent},
  {path: 'iniciosejc', component: IniciosejcComponent},
  {path: 'Iniciojc', component: IniciojcComponent},
  {path: 'Iniciojd', component: IniciojdComponent},
  {path: 'jefes', component: JefesComponent},
  {path: 'subdirec', component: SubdirecComponent},
  {path: 'aprobarjc', component: AprobarjcComponent},
  {path: 'aprobarda', component: AprobardaComponent},

  //recursos humanos ocupa estos componenetes
  {path: 'inicioserh', component: InicioserhComponent},
  {path: 'rh', component: RhComponent},
  {path: 'InicioRh', component: IniciorhComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'historialA', component: HistorialAdminComponent},
  {path: 'excel', component:ExcelComponent},
  {path: 'grafica', component: VerticalBarrComponent},

  //esto funciona para que cada que coloques un nombre incorrecto te lleve directo al inicio de sesion
  {path: '', component: IniciosesionComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
  


]
//useHash funciona al recargar la pagina, si no se agrega y se recargan paginas dara un error 404, por eso esta ahí
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports:[RouterModule]
})
export class AppRoutingModule { }
