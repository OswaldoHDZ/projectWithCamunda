import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from "src/app/services/service.service"
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})
export class ContratoComponent implements OnInit {

  @Input() name: string;
  mensaje: string;


  id: string;
  empresa: string;
  nombre_solicitante : string;
  area_solicitante: string;
  nombre_responsable_area: string;
  nombre_apoderado_legal: string;
  nombre_contraparte_juridica: string;
  rfc_contraparte: string;
  domicilio_contraparte: string;
  antecedentes: string;
  tipo_instrumento: string;
  vigencia: string;
  objeto: string;
  contraprestacion: string;
  constructor(private dataSvc: ServiceService, private route: ActivatedRoute) {

  }
  idContrato: string;
  ngOnInit() {
    this.dataSvc.enviarMensajeObservable.subscribe(response => {
      this.mensaje = response;
      this.dataSvc.pasarIDdeContrato(response.toString()).subscribe(data => {
        this.empresa = data.empresa.value;
        this.nombre_solicitante = data.nombre_solicitante.value;
        this.area_solicitante = data.area_solicitante.value;
        this.nombre_responsable_area = data.nombre_responsable_area.value;
        this.nombre_apoderado_legal = data.nombre_apoderado_legal.value;
        this.nombre_contraparte_juridica = data.nombre_contraparte_juridica.value;
        this.rfc_contraparte = data.rfc_contraparte.value;
        this.domicilio_contraparte = data.domicilio_contraparte.value;
        this.antecedentes = data.antecedentes.value;
        this.tipo_instrumento = data.tipo_instrumento.value;
        this.vigencia = data.vigencia.value;
        this.objeto = data.objeto.value;
        this.contraprestacion = data.contraprestacion.value;
        console.log("wevweew");
      });


    });



    this.dataSvc.enviarIDObservable.subscribe(response => {
      this.id = response;
    });

    // this.dataSvc.pasarIDdeContrato('/engine-rest/process-instance/'+this.mensaje+'/variables' ).subscribe
    //   (data => console.log("Estas en contrato",data)
    // );

  }

  ngOnChanges(): void {

  }
  //   // console.log("Se cargo el contrato ----")
  //   // console.log("$$$$$$$$",this.dataSvc.getIdContrato());
  //   // console.log("+++++++++++",this.route.snapshot.params.id);
  //   this.idContrato = this.route.snapshot.params.id;
  //   // this.route.queryParams.subscribe(params => {
  //   //   this.name = params['name'];
  //   // });
  //   // this.dataSvc.getVariablesPorId().subscribe(data => console.log("Estas en contrato",data));
  // }
  // ngDoCheck(){
  //   this.idContrato = this.route.snapshot.params.id;
  //   console.log("+++++++++++",this.idContrato);
  //   // this.dataSvc.pasarIDdeContrato(this.route.snapshot.params.id).subscribe(data => console.log("Estas en contrato",data));

  //   // this.dataSvc.getVariablesPorId(this.route.snapshot.params.id).subscribe(data => console.log("Estas en contrato",data));

  // }

}