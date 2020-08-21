import { Component, OnInit } from '@angular/core';
import { ServiceService } from "src/app/services/service.service"
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-revision-inicial',
  templateUrl: './revision-inicial.component.html',
  styleUrls: ['./revision-inicial.component.css']
})
export class RevisionInicialComponent implements OnInit {
  
  constructor(private dataSvc: ServiceService) {
    
  }

  id_Revision: string;
  executionId_Revision: string;

  // Variables para pintar en pantalla y para completar proceso
  empresa: string;
  nombre_solicitante: string;
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

  comentarioRevLegal : string; 

  ngOnInit() {
    this.dataSvc.revisionObservable_ID.subscribe(response => { this.id_Revision = response; });
    this.dataSvc.revisionObservable_EXCUTION.subscribe(response => {
      this.executionId_Revision = response;
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
        console.log("wevweew");
      });
    });
  }

  createForm() {
    return new FormGroup({
      empresa: new FormControl('', [Validators.required])
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
      "comentarioRevLegal": { "value": "area", "type": "String" },
    }
  }
  procesarSolicitud() {

    console.log("AQUIIIIIIIIII ", this.id_Revision)
    console.log("OTROOOOOOOOO  ", this.executionId_Revision)
    console.log("TTTTTTTTTTTT  ", this.comentarioRevLegal)
    if (this.empresa) {
      this.variables.variables.empresa.value = this.empresa;
      this.variables.variables.nombre_solicitante.value = this.nombre_solicitante;
      this.variables.variables.area_solicitante.value = this.area_solicitante;
      this.variables.variables.nombre_responsable_area.value = this.nombre_responsable_area;
      this.variables.variables.nombre_apoderado_legal.value = this.nombre_apoderado_legal;
      this.variables.variables.nombre_contraparte_juridica.value = this.nombre_contraparte_juridica;
      this.variables.variables.rfc_contraparte.value = this.rfc_contraparte;
      this.variables.variables.domicilio_contraparte.value = this.domicilio_contraparte;
      this.variables.variables.antecedentes.value = this.antecedentes;
      this.variables.variables.tipo_instrumento.value = this.tipo_instrumento;
      this.variables.variables.vigencia.value = this.vigencia;
      this.variables.variables.objeto.value = this.objeto;
      this.variables.variables.contraprestacion.value = this.contraprestacion;


      this.variables.variables.comentarioRevLegal.value = this.comentarioRevLegal;

      this.dataSvc.enviarARevisionLegal(this.variables,this.id_Revision).subscribe(
        data => {
          console.log(data);
          Swal.fire({
            icon: 'success',
            title: 'Solicitud de Instrumentación Jurídica Estandarizada',
            text: 'Tú solicitud se ha enviado a geración de contrato con exito!',
            footer: ''
          })
        },
        err => {
          console.log(err.error.message);
          Swal.fire({
            icon: 'error',
            title: '¡AVISO!',
            text: 'Tu solicitud no se concreto, consulta el area de soporte!',
            footer: ''
          })
        }
      );
      

    } else {
      Swal.fire({
        icon: 'warning',
        title: '¡AVISO!',
        text: '¡Seleccióna una tarea que puede atenderce!',
        footer: ''
      })
    }

  }
  modificarSolicitud() {

    console.log("AQUIIIIIIIIII ", this.id_Revision)
    console.log("OTROOOOOOOOO  ", this.executionId_Revision)
    console.log("TTTTTTTTTTTT  ", this.comentarioRevLegal)
    if (this.empresa) {
      Swal.fire({
        icon: 'success',
        title: 'Solicitud de Instrumentación Jurídica Estandarizada',
        text: 'Tú solicitud se ha enviado a modificación de contrato con exito!',
        footer: ''
      })
    } else {
      Swal.fire({
        icon: 'warning',
        title: '¡AVISO!',
        text: '¡Seleccióna una tarea que puede atenderce!',
        footer: ''
      })
    }

  }

  

}
