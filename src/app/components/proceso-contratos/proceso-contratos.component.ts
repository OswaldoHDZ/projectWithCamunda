import { Component, OnInit } from '@angular/core';
import { ServiceService } from "src/app/services/service.service"
@Component({
  selector: 'app-proceso-contratos',
  templateUrl: './proceso-contratos.component.html',
  styleUrls: ['./proceso-contratos.component.css'],
  providers: [ServiceService]
})
export class ProcesoContratosComponent implements OnInit {

  public empresa: string;
  public area_solicitante: string;

  public nombre_responsable_area: string;
  public nombre_apoderado_legal: string;
  public nombre_contraparte_juridica: string;
  public rfc_contraparte: string;
  public domicilio_contraparte: string;
  public antecedentes: string;
  public tipo_instrumento: string;
  public vigencia: string;
  public objeto: string;
  public contraprestacion: string;


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
      "empresa": {
        "value": "nombre",
        "type": "String"
      },
      "area_solicitante": {
        "value": "area",
        "type": "String"
      }
    }
  }

  constructor(private data: ServiceService) {
    this.exito = "Se mando correctamente";
    console.log("Componente cargado")
    console.log(this.exito)
  }

  // constructor(private data: ServiceService) {
  //   this.exito = "Se mando correctamente";
  //   console.log("Componente cargado")
  //   console.log(this.exito)
  // }
  ngOnInit(): void {
  }
  crearContrato() {
    this.variables2.variables.area_solicitante.value = this.empresa;
    this.variables2.variables.area_solicitante.value = this.area_solicitante;
    this.data.crearProcesoGeneraContrato(this.variables2).subscribe(
      data => {
        
        console.log(data)
      },
      err => {
        console.log(err.error.message);

      }
    );

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
