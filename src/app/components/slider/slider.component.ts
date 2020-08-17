import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ServiceService } from "src/app/services/service.service"



@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  public cantidadAPI;
  public infoContratos;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private dataSvc: ServiceService) {
    this.mobileQuery = media.matchMedia('(max-width: 800px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  mobileQuery: MediaQueryList;
  ngOnInit() {

    console.log("Se cargo la barra");

    // this.dataSvc.obtenerCantidadRevinicial().subscribe(data => (this.fillerNav[2].cantidad = data.count));
    // // this.dataSvc.obtenerCantidadRevinicial().subscribe(data => ( this.fillerNav[2].cantidad = data)  );
    // this.dataSvc.getInfoContrato().subscribe(data => console.log(this.listaDeTramites[0].contratos = data));
    // this.dataSvc.getInfoContrato().subscribe(data => console.log(this.tramitesEnprogreso[0].contratos = data[0].created));

    this.dataSvc.getInfoContrato().subscribe(data => console.log(this.fillerNav[1].progresos  =  data));
    this.dataSvc.getInfoContrato().subscribe(data => console.log(this.fillerNav[3].progresos  =  data));
  }
  // fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);


  // fillerNav = [
  //   { name: " Home", route: "", icon: 'home' },
  //   { name: " Crear contrato", route: "proceso_contratos", icon: 'add_circle_outline'  },
  //   { name: " Revisión inicial", route: "solicitudProcesoContratos-1", icon: 'check_circle_outline',cantidad :1, contratos : []},
  //   { name: " Revisión legal", route: "SolicitudProcesoContratos-2", icon: 'account_balance' },
  //   { name: " Modificacion Solicitud", route: "SolicitudProcesoContratos-3", icon: 'edit' },
  //   { name: " Generar contrato", route: "SolicitudProcesoContratos-4", icon: 'check_circle' }
  // ]

  listaDeTramites  = [
    { name: "Inicio Proceso Contratos", route: "proceso_contratos", icon: 'description'}
  ]

  tramitesQuePuedenAtendence = [
  ]
  nombreProgreso = "Nombre"

  fillerNav = [
    { name: " Trámites", route: "", icon: 'assignment_ind', tramites : this.listaDeTramites },
    { name: " Trámites en proceso", route: "", icon: 'hourglass_empty', progresos : [] },
    { name: " Requieren atención", route: "", icon: 'assignment_late', cantidad: 1, contratos: [] },
    { name: " Pueden atenderse", route: "", icon: 'assignment_turned_in' , tramites : this.tramitesQuePuedenAtendence }
  ]

  private _mobileQueryListener: () => void;



  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  shouldRun = true;


}
