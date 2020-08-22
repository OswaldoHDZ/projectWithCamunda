import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ServiceService } from "src/app/services/service.service"
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


  id_RevisionLegal: string;
  executionId_RevisionLegal: string;

  id_RevisionContrato: string;
  executionId_RevisionContrato: string;


  var1 : string;
  var2 : string;


  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private dataSvc: ServiceService) {

    this.names = ['Oswaldo', 'Josue']
    this.mobileQuery = media.matchMedia('(max-width: 800px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  mobileQuery: MediaQueryList;

  name = 'name';


  ngOnInit() {
    this.dataSvc.enviarMensajeObservable.subscribe(response => { this.mensaje = response; });

    this.dataSvc.revisionObservable_ID.subscribe(response => { this.id_Revision = response; });
    this.dataSvc.revisionObservable_EXCUTION.subscribe(response => { this.executionId_Revision = response; });

    this.dataSvc.revisionObservable_ID_Legal.subscribe(response => { this.id_RevisionLegal = response; });
    this.dataSvc.revisionObservable_EXCUTION_Legal.subscribe(response => { this.executionId_RevisionLegal = response; });

    
    this.dataSvc.revisionObservable_ID_Contrato.subscribe(response => { this.id_RevisionContrato = response; });
    this.dataSvc.revisionObservable_EXCUTION_Contato.subscribe(response => { this.executionId_RevisionContrato = response; });



    this.dataSvc.var1EnviarVarsObservable.subscribe(var1 => {this.var1 = var1;} );
    this.dataSvc.var2EnviarVarsObservable.subscribe(var2 => {this.var2 = var2;} );

    // this.dataSvc.obtenerCantidadRevinicial().subscribe(data => (this.fillerNav[2].cantidad = data.count));
    // // this.dataSvc.obtenerCantidadRevinicial().subscribe(data => ( this.fillerNav[2].cantidad = data)  );
    // this.dataSvc.getInfoContrato().subscribe(data => console.log(this.listaDeTramites[0].contratos = data));
    // this.dataSvc.getInfoContrato().subscribe(data => console.log(this.tramitesEnprogreso[0].contratos = data[0].created));


    // GET Todos los procesos que a iniciado el empleado 
    this.dataSvc.getInfoContrato().subscribe(data => this.fillerNav[1].progresos = data);

    // GET Todos los procesos que pueden atencerce que a iniciado el empleado 
    this.dataSvc.getInfoContrato().subscribe(data => {
      let datos: [];
      let rutas: string[];
      let routeRevLegal: string;
      datos = data;
      let listaTramites = new Array();
      for (let dato of datos) {
        // console.log(dato[this.name]); // 1, "string", false
        if ((dato[this.name] == 'Revision Legal') || (dato[this.name] == 'Revisión inicial') || (dato[this.name] == 'Generar Contrato')) {
          listaTramites.push(dato)
        }
        // formKey: "embedded:app:forms/SolicitudProcesoContratos-2.html"
      }
      this.fillerNav[3].tramitesPuedeAtenderse = listaTramites
      // console.log(datos)
    });

  }


  HelloCorp(mensaje: string) {
    // console.log(mensaje);
    console.log("Entro hello")
    this.dataSvc.enviarMensjae(mensaje);
    // this.dataSvc.pasarIDdeContrato(value);
  }
  selectPuedeAtenderce(id: string, executionId: string, name: string) {
    if (name == 'Revisión inicial') {
      this.dataSvc.enviarRevisionInicial(id, executionId);
    }
    if (name == 'Revision Legal') {
      console.log("Entro")
      this.dataSvc.enviarRevisionLegal(id, executionId);
      //this.dataSvc.enviarMensjae(id);
    }
    if (name == 'Generar Contrato') {
      console.log("Entro Generar Contrato ",name)
      this.dataSvc.enviarVars(id, executionId);
      this.dataSvc.enviarGenerarContrato(id, executionId);
      //this.dataSvc.enviarMensjae(id);
    }
    // console.log("ID : ", id)
    // console.log("executionId : ", executionId)
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
  tramiteGenerarContrato = { route: "SolicitudProcesoContratos-4", icon: 'description' };
  nombreProgreso = "Nombre"

  fillerNav = [
    { name: " Trámites", route: "", icon: 'assignment_ind', tramites: this.listaDeTramites },
    { name: " Trámites en proceso", route: "", icon: 'hourglass_empty', progresos: [] },
    { name: " Requieren atención", route: "", icon: 'assignment_late', cantidad: 1, contratos: [] },
    { name: " Pueden atenderse", icon: 'assignment_turned_in', tramitesPuedeAtenderse: [] }
  ]


  public corporationObj;



  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  private _mobileQueryListener: () => void;
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  shouldRun = true;
}
