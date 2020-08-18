
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable'
import { ContratoInterface } from '../shared/models/contrato.interface'
import { Subject } from 'rxjs';


const httpOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

const url_api = "/engine-rest/process-definition/key/payment-retrieval/start/"
const url_api_contrato = "/engine-rest/process-definition/key/ProcesoContratos/start/"

const url_api_get_cantidad_contatos_a_revisar = '/engine-rest/task/count?processDefinitionKey=ProcesoContratos'

const url_api_info_revInicial = '/engine-rest/task?processDefinitionKey=ProcesoContratos'


const url_api_obtener_Info_porinstancia =  "/engine-rest/process-instance/2ea28dc8-dec5-11ea-9eb7-287fcfe23944/variables"

@Injectable()
export class ServiceService {

  constructor(private http: HttpClient) { }
  public empresa: string;
  public area_solicitante: string;


  mensaje :string;
  private enviarMensajeSubject = new Subject<string>();
  enviarMensajeObservable = this.enviarMensajeSubject.asObservable();

  enviarMensjae(mensaje : string){
    this.mensaje = mensaje;
    this.enviarMensajeSubject.next(mensaje);
  }

  id :string;
  private enviarIdSubject = new Subject<string>();
  enviarIDObservable = this.enviarMensajeSubject.asObservable();

  enviarId(id : string){
    this.mensaje = id;
    this.enviarMensajeSubject.next(id);
    return this.http.get(id,httpOption);
  }




  getAllbooks(variabe: { variables: { amount: { value: number; type: string; }; item: { value: string; }; }; }): Observable<any> {
    console.log(variabe);
    return this.http.post(url_api, variabe, httpOption);
  }

  getVriablesPorId():Observable<any>{

    
    const url_api = "/engine-rest/process-instance/2ea28dc8-dec5-11ea-9eb7-287fcfe23944/variables"
    return this.http.get(url_api,httpOption);
  }

  pasarIDdeContrato(id  : string): Observable<any>{
    
    let url = "/engine-rest/process-instance/2ea28dc8-dec5-11ea-9eb7-287fcfe23944/variables";
    let otro = "/engine-rest/process-instance/"+id.toString()+"/variables";


    let casa = otro.toString();
    console.log("Estas en pasarporId ", typeof(url))
    console.log("Estas en pasarporId ", typeof(otro))
    return this.http.get(casa,httpOption);

  }
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