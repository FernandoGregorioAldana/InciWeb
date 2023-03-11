import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat'
import { AppRoutingModule } from './app-routing.module';
import { IniciosesionComponent } from './component/iniciosesion/iniciosesion.component';
import { RegistroComponent } from './component/registro/registro.component';
import { RecuperarComponent } from './component/recuperar/recuperar.component';
import { PerfilComponent } from './component/perfil/perfil.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HotToastModule } from '@ngneat/hot-toast';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { HistorialComponent } from './component/historial/historial.component';
import { AdminComponent } from './component/admin/admin.component';
import { AntesComponent } from './component/antes/antes.component';
import { EconomicoComponent } from './component/economico/economico.component';
import { EstatusComponent } from './component/estatus/estatus.component';
import { JefesComponent } from './component/jefes/jefes.component';
import { HistorialAdminComponent } from './component/historial-admin/historial-admin.component';
import { LactanciaComponent } from './component/lactancia/lactancia.component';
import { MedicaComponent } from './component/medica/medica.component';
import { OtroComponent } from './component/otro/otro.component';
import { RhComponent } from './component/rh/rh.component';
import { SubdirecComponent } from './component/subdirec/subdirec.component';
import { SueldoComponent } from './component/sueldo/sueldo.component';
import { TardeComponent } from './component/tarde/tarde.component';
import { TipoComponent } from './component/tipo/tipo.component';
import { IniciorhComponent } from './component/iniciorh/iniciorh.component';
import { IniciojcComponent } from './component/iniciojc/iniciojc.component';
import { IniciojdComponent } from './component/iniciojd/iniciojd.component';
import { InicioserhComponent } from './component/inicioserh/inicioserh.component';
import { IniciosejcComponent } from './component/iniciosejc/iniciosejc.component';
import { IniciosejdComponent } from './component/iniciosejd/iniciosejd.component';
import { AprobarjcComponent } from './component/aprobarjc/aprobarjc.component';
import { AprobardaComponent } from './component/aprobarda/aprobarda.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { VerticalBarrComponent } from './component/estadisticos/grafica/vertical-barr/vertical-barr.component';
import { ExcelComponent } from './component/excel/excel.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatModule } from './mat/mat.module';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    IniciosesionComponent,
    RecuperarComponent,
    PerfilComponent,
    InicioComponent,
    HistorialComponent,
    AdminComponent,
    AntesComponent,
    EconomicoComponent,
    EstatusComponent,
    JefesComponent,
    HistorialAdminComponent,
    LactanciaComponent,
    MedicaComponent,
    OtroComponent,
    RhComponent,
    SubdirecComponent,
    SueldoComponent,
    TardeComponent,
    TipoComponent,
    IniciorhComponent,
    IniciojcComponent,
    IniciojdComponent,
    InicioserhComponent,
    IniciosejcComponent,
    IniciosejdComponent,
    AprobarjcComponent,
    AprobardaComponent,
    VerticalBarrComponent,
    ExcelComponent,
    ],

    imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
    provideStorage(() => getStorage()),
    AppRoutingModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFunctions(() => getFunctions()),
    provideAnalytics(() => getAnalytics()),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HotToastModule.forRoot(),
    provideDatabase(() => getDatabase()),
    NgxChartsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatModule,
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
