import { Component, OnInit } from '@angular/core';
import { ServiceService } from "src/app/services/service.service"
import Swal from 'sweetalert2'

@Component({
  selector: 'app-gererar-contrato',
  templateUrl: './gererar-contrato.component.html',
  styleUrls: ['./gererar-contrato.component.css'],
  providers: [ServiceService]
})
export class GererarContratoComponent implements OnInit {

  public empresa: string;
  public area_solicitante: string;
  public nombre_solicitante: string;
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
      "empresa": {
        "value": this.empresa,
        "type": "String"
      },
      "area_solicitante": {
        "value": this.area_solicitante,
        "type": "String"
      }
    }
  }

  constructor(private data: ServiceService) {
    this.exito = "Se mando correctamente";
    console.log(this.exito)
  }
  ngOnInit(): void {
  }

  // mandaInformacion() {

  //   this.data.crearProcesoGeneraContrato(this.variables).subscribe(
  //     data => {
  //       console.log(data)
  //     },
  //     err => {
  //       console.log(err.error.message);

  //     }
  //   );

  // }

}
