
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable'
import { ContratoInterface } from '../shared/models/contrato.interface'


const httpOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

const url_api = "/engine-rest/process-definition/key/payment-retrieval/start/"
const url_api_contrato = "/engine-rest/process-definition/key/ProcesoContratos/start/"

const url_api_get_cantidad_contatos_a_revisar = '/engine-rest/task/count?processDefinitionKey=ProcesoContratos'

const url_api_info_revInicial = '/engine-rest/task?processDefinitionKey=ProcesoContratos'


let url_api_obtener_Info_porinstancia =  '';

@Injectable()
export class ServiceService {

  constructor(private http: HttpClient) { }
  public empresa: string;
  public area_solicitante: string;

  getAllbooks(variabe: { variables: { amount: { value: number; type: string; }; item: { value: string; }; }; }): Observable<any> {
    console.log(variabe);
    return this.http.post(url_api, variabe, httpOption);
  }

  public idContrato : string;
  pasarIDdeContrato(numero : string){
    console.log("Estas en el servicio")
    url_api_obtener_Info_porinstancia =  "/engine-rest/process-instance/"+numero+"/variables"
    console.log(url_api_obtener_Info_porinstancia)
    
  }
  getIdContrato(){
    console.log("Esta es la API", url_api_obtener_Info_porinstancia)
    return url_api_obtener_Info_porinstancia;
  }
  // getVariablesPorId():Observable<any>{
  //   console.log("Estas en get varible")
  //   return this.http.get(this.idContrato,httpOption);
  // }

  
  obtenerCantidadRevinicial(): Observable<any> {
    return this.http.get(url_api_get_cantidad_contatos_a_revisar,httpOption);
  }
  getInfoContrato():Observable<any> {
    return this.http.get(url_api_info_revInicial,httpOption) ;
  }



  crearProcesoGeneraContrato( variables2 :
    {
      variables:
      {
        empresa : { value : string; type: string;};
        area_solicitante : { value : string; type: string;};
        nombre_responsable_area : { value : string; type: string;};
        nombre_apoderado_legal : { value : string; type: string;};
        nombre_contraparte_juridica : { value : string; type: string;};
        rfc_contraparte : { value : string; type: string;};
        domicilio_contraparte : { value : string; type: string;};
        antecedentes : { value : string; type: string;};
        tipo_instrumento : { value : string; type: string;};
        vigencia : { value : string; type: string;};
        objeto : { value : string; type: string;};
        contraprestacion : { value : string; type: string;};
      };
    }): Observable<any> {
    console.log(variables2);
    return this.http.post(url_api_contrato, variables2, httpOption);
  }

}
