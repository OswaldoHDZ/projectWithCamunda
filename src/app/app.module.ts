import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
//componentes
import { SliderComponent } from './components/slider/slider.component';

// //Angular material
// https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatBadgeModule} from '@angular/material/badge';

//Componentes dentro 
import { ProcesoContratosComponent } from './components/proceso-contratos/proceso-contratos.component';

//Servicios
import { HttpClientModule } from "@angular/common/http"
import { ServiceService } from "src/app/services/service.service"
//Rutas
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RevisionInicialComponent } from './components/revision-inicial/revision-inicial.component';
import { RevisionLegalComponent } from './components/revision-legal/revision-legal.component';
import { ModificacionSolicitudComponent } from './components/modificacion-solicitud/modificacion-solicitud.component';
import { GererarContratoComponent } from './components/gererar-contrato/gererar-contrato.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContratoComponent } from './components/Status/contrato/contrato.component';

//Componentes 
// ES6 Modules or TypeScript sweetalert2
 
const rutas : Routes = [
  { path : 'proceso_contratos', component : ProcesoContratosComponent},
  { path : '', component : HomeComponent},
  { path : 'solicitudProcesoContratos-1', component : RevisionInicialComponent},
  { path : 'SolicitudProcesoContratos-2', component : RevisionLegalComponent},
  { path : 'SolicitudProcesoContratos-3', component : ModificacionSolicitudComponent},
  { path : 'SolicitudProcesoContratos-4', component : GererarContratoComponent},
  { path : 'login', component : LoginComponent},
  { path : 'contrato/:id', component : ContratoComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    ProcesoContratosComponent,
    HomeComponent,
    RevisionInicialComponent,
    RevisionLegalComponent,
    ModificacionSolicitudComponent,
    GererarContratoComponent,
    LoginComponent,
    AdminComponent,
    ContratoComponent
  ],
  imports: [
    MatBadgeModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatExpansionModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    RouterModule.forRoot(rutas)
  ],
  exports: [
    RouterModule,
    MatBadgeModule,
    FormsModule ,
    MatSliderModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
