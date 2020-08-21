import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ServiceService } from "src/app/services/service.service"
import { stringify } from '@angular/compiler/src/util';



@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {




  names: string[];
  public cantidadAPI;
  public infoContratos;

  mensaje: string;


  id_Revision: string;
  executionId_Revision: string;


  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private dataSvc: ServiceService) {

    this.names = ['Oswaldo', 'Josue']
    this.mobileQuery = media.matchMedia('(max-width: 800px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  mobileQuery: MediaQueryList;

  name  = 'name';
  routeRevLegal = 'SolicitudProcesoContratos-2'
  routeRevInicial = 'SolicitudProcesoContratos-1'


  ngOnInit() {
    this.dataSvc.enviarMensajeObservable.subscribe(response => { this.mensaje = response; });

    this.dataSvc.revisionObservable_ID.subscribe(response => { this.id_Revision = response; });
    this.dataSvc.revisionObservable_EXCUTION.subscribe(response => { this.executionId_Revision = response; });


    // this.dataSvc.obtenerCantidadRevinicial().subscribe(data => (this.fillerNav[2].cantidad = data.count));
    // // this.dataSvc.obtenerCantidadRevinicial().subscribe(data => ( this.fillerNav[2].cantidad = data)  );
    // this.dataSvc.getInfoContrato().subscribe(data => console.log(this.listaDeTramites[0].contratos = data));
    // this.dataSvc.getInfoContrato().subscribe(data => console.log(this.tramitesEnprogreso[0].contratos = data[0].created));


    // GET Todos los procesos que a iniciado el empleado 
    this.dataSvc.getInfoContrato().subscribe(data => console.log("Estos son los progresos ", this.fillerNav[1].progresos = data));

    // GET Todos los procesos que pueden atencerce que a iniciado el empleado 
    this.dataSvc.getInfoContrato().subscribe(data => {
      let datos : [];
      let rutas : string[];
      let routeRevLegal : string;
      datos = data;
      let listaTramites = new Array();
      for (let dato of datos) {
        console.log(dato[this.name]); // 1, "string", false
        if ((dato[this.name] == 'Revision Legal') || (dato[this.name] == 'Revisión inicial') ){
          listaTramites.push(dato)
        }
        // formKey: "embedded:app:forms/SolicitudProcesoContratos-2.html"
      }
      console.log("Estos son los progresos ", this.fillerNav[3].tramitesPuedeAtenderse = listaTramites)
      console.log(datos)
    });

  }


  HelloCorp(mensaje: string) {
    console.log(mensaje);
    this.dataSvc.enviarMensjae(mensaje);
    // this.dataSvc.pasarIDdeContrato(value);
  }
  selectPuedeAtenderce(id: string, executionId: string) {
    console.log("ID : ", id)
    console.log("executionId : ", executionId)
    this.dataSvc.enviarRevision(id, executionId);
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

  listaDeTramites = [
    { name: "Solicitud de Instrumentación", route: "proceso_contratos", icon: 'description' }
  ]
  tramitePuedeAtendence = [
    { name: "Tramites de contrato", route: "", icon: 'shop', tramites: [] }
  ]

  status = { route: "contrato", icon: 'description' };
  tramiteAtenderce = { route: "solicitudProcesoContratos-1", icon: 'description' };
  tramiteLegal = { route: "SolicitudProcesoContratos-2", icon: 'description' }; 
  nombreProgreso = "Nombre"

  fillerNav = [
    { name: " Trámites", route: "", icon: 'assignment_ind', tramites: this.listaDeTramites },
    { name: " Trámites en proceso", route: "", icon: 'hourglass_empty', progresos: [] },
    { name: " Requieren atención", route: "", icon: 'assignment_late', cantidad: 1, contratos: [] },
    { name: " Pueden atenderse", route: "solicitudProcesoContratos-1", icon: 'assignment_turned_in', tramitesPuedeAtenderse: []}
  ]


  public corporationObj;



  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  private _mobileQueryListener: () => void;
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  shouldRun = true;

  // ------------------ Esto lo vamos a ocupar para mostrar revisiónes de ocntrato ----------------






}
