import { Component } from '@angular/core';
import { ServiceService } from "src/app/services/service.service"
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-proceso-contratos',
  templateUrl: './proceso-contratos.component.html',
  styleUrls: ['./proceso-contratos.component.css'],
  providers: [ServiceService]
})
export class ProcesoContratosComponent {

 
  public contactForm: FormGroup;


  public exito: string;
  public amount: number;
  public item: string;
  public variables = {
    "variables": {
      "amount": {
        "value": 123456789,
        "type": "long"
      },
      "item": {
        "value": "Prueba"
      }
    }
  }
  public variables2 = {
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
      "contraprestacion": { "value": "area", "type": "String" }
    }
  }

  constructor(private data: ServiceService) {
    this.contactForm = this.createForm();
  }
  get empresa() { return this.contactForm.get('empresa'); }
  get nombre_solicitante() { return this.contactForm.get('nombre_solicitante'); }
  get area_solicitante() { return this.contactForm.get('area_solicitante'); }
  get nombre_responsable_area() { return this.contactForm.get('nombre_responsable_area'); }
  get nombre_apoderado_legal() { return this.contactForm.get('nombre_apoderado_legal'); }
  get nombre_contraparte_juridica() { return this.contactForm.get('nombre_contraparte_juridica'); }
  get rfc_contraparte() { return this.contactForm.get('rfc_contraparte'); }
  get domicilio_contraparte() { return this.contactForm.get('domicilio_contraparte'); }
  get antecedentes() { return this.contactForm.get('antecedentes'); }
  get tipo_instrumento() { return this.contactForm.get('tipo_instrumento'); }
  get vigencia() { return this.contactForm.get('vigencia'); }
  get objeto() { return this.contactForm.get('objeto'); }
  get contraprestacion() { return this.contactForm.get('contraprestacion'); }

  createForm() {
    return new FormGroup({
      empresa: new FormControl('', [Validators.required]),
      nombre_solicitante: new FormControl('', [Validators.required]),
      area_solicitante: new FormControl('', [Validators.required]),
      nombre_responsable_area: new FormControl('', [Validators.required]),
      nombre_apoderado_legal: new FormControl('', [Validators.required]),
      nombre_contraparte_juridica: new FormControl('', [Validators.required]),
      rfc_contraparte: new FormControl('', [Validators.required]),
      domicilio_contraparte: new FormControl('', [Validators.required]),
      antecedentes: new FormControl('', [Validators.required]),
      tipo_instrumento: new FormControl('', [Validators.required]),
      vigencia: new FormControl('', [Validators.required]),
      objeto: new FormControl('', [Validators.required]),
      contraprestacion: new FormControl('', [Validators.required])
    });
  }

  onResetForm(): void {
    console.log("dfgre")
    this.contactForm.reset();
  }

  // constructor(private data: ServiceService) {
  //   this.exito = "Se mando correctamente";
  //   console.log("Componente cargado")
  //   console.log(this.exito)
  // }
  crearContrato() {
    console.log(this.contactForm.valid)
    if (this.contactForm.valid) {
      this.variables2.variables.empresa.value = this.contactForm.value.empresa;
      this.variables2.variables.nombre_solicitante.value = this.contactForm.value.nombre_solicitante;
      this.variables2.variables.area_solicitante.value = this.contactForm.value.area_solicitante;
      this.variables2.variables.nombre_responsable_area.value = this.contactForm.value.nombre_responsable_area;
      this.variables2.variables.nombre_apoderado_legal.value = this.contactForm.value.nombre_apoderado_legal;
      this.variables2.variables.nombre_contraparte_juridica.value = this.contactForm.value.nombre_contraparte_juridica;
      this.variables2.variables.rfc_contraparte.value = this.contactForm.value.rfc_contraparte;
      this.variables2.variables.domicilio_contraparte.value = this.contactForm.value.domicilio_contraparte;
      this.variables2.variables.antecedentes.value = this.contactForm.value.antecedentes;
      this.variables2.variables.tipo_instrumento.value = this.contactForm.value.tipo_instrumento;
      this.variables2.variables.vigencia.value = this.contactForm.value.vigencia;
      this.variables2.variables.objeto.value = this.contactForm.value.objeto;
      this.variables2.variables.contraprestacion.value = this.contactForm.value.contraprestacion;
      this.data.crearProcesoGeneraContrato(this.variables2).subscribe(
        data => {
          console.log(data);
          Swal.fire({
            icon: 'success',
            title: 'Crear contrato',
            text: 'El contrato se ha enviado a revisión con exito!',
            footer: ''
          })
        },
        err => {
          console.log(err.error.message);
          Swal.fire({
            icon: 'error',
            title: '¡AVISO!',
            text: 'No se creo el contrato, consulta el area de soporte!',
            footer: ''
          })
        }
      );
      this.onResetForm();
    } else {
      Swal.fire({
        icon: 'warning',
        title: '¡AVISO!',
        text: '¡Faltan campos por completar!',
        footer: ''
      })
    }
  }

  mandaInformacion() {
    console.log(this.amount)
    console.log(this.item)
    console.log("123456")
    this.variables.variables.amount.value = this.amount;
    this.variables.variables.item.value = this.item;
    this.data.getAllbooks(this.variables).subscribe(
      data => {
        console.log(data)
      },
      err => {
        console.log(err.error.message);

      }
    );

  }

}
