import { Component, OnInit } from '@angular/core';
import { ServiceService } from "src/app/services/service.service"
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gererar-contrato',
  templateUrl: './gererar-contrato.component.html',
  styleUrls: ['./gererar-contrato.component.css'],
  providers: [ServiceService]
})
export class GererarContratoComponent implements OnInit {

  constructor(private dataSvc: ServiceService) { }

  id_GenerarContrato: string;
  executionId_GenerarContrato: string;

  // Variables para pintar en pantalla y para completar proceso
  empresa: string;
  nombre_apoderado_legal : string;
  nombre_solicitante: string;
  area_solicitante: string;
  nombre_responsable_area: string;
  nombre_contraparte_juridica: string;
  rfc_contraparte: string;
  domicilio_contraparte: string;
  antecedentes: string;
  tipo_instrumento: string;
  vigencia: string;
  objeto: string;
  contraprestacion: string;

  comentarioRevInicial: string;
  comentarioRevLegal : string;

  ngOnInit() {
    this.dataSvc.revisionObservable_ID_Contrato.subscribe(response => { this.id_GenerarContrato = response;  console.log("ACAAAAA")});
    this.dataSvc.revisionObservable_EXCUTION_Contato.subscribe(response => {
      this.executionId_GenerarContrato = response;
      this.dataSvc.pasarIDdeContrato(response.toString()).subscribe(data => {
        console.log("ESTAS EN VALUE", data.empresa.value)
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
        this.comentarioRevInicial = data.comentarioRevInicial.value;
        this.comentarioRevLegal = data.comentarioRevLegal.value;
        // console.log("wevweew");
      });
    });
  }

  public variables = {
    "variables": {
      "empresa": { "value": "nombre", "type": "String" },
      "nombre_solicitante": { "value": "nombre", "type": "String" },
      "area_solicitante": { "value": "area", "type": "String" },
      "nombre_responsable_area": { "value": "area", "type": "String" },
      "nombre_apoderado_legal": { "value": "area", "type": "String" },
      "nombre_contraparte_juridica": { "value": "area", "type": "String" },
      "rfc_contraparte": { "value": "area", "type": "String" },
      "domicilio_contraparte": { "value": "area", "type": "String" },
      "antecedentes": { "value": "area", "type": "String" },
      "tipo_instrumento": { "value": "area", "type": "String" },
      "vigencia": { "value": "area", "type": "String" },
      "objeto": { "value": "area", "type": "String" },
      "contraprestacion": { "value": "area", "type": "String" },
      "aprobacion": { "value": true, "type": Boolean},
      "comentarioRevInicial": { "value": "_", "type": "String" },
      "comentarioRevLegal": { "value": "_", "type": "String" }
    }
  }
}
