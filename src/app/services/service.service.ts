import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable'
import { Subject } from 'rxjs';


const httpOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

//GET por processDefinitionKey 
// const url_api_contrato = "/engine-rest/process-definition/key/ProcesoContratos/start/"
// const url_api_get_cantidad_contatos_a_revisar = '/engine-rest/task/count?processDefinitionKey=ProcesoContratos'
// const url_api_obtener_Info_porinstancia =  "/engine-rest/process-instance/2ea28dc8-dec5-11ea-9eb7-287fcfe23944/variables"
// const url_api_info_revInicial = '/engine-rest/task?processDefinitionKey=ProcesoContratos'

//Get por processDefinitionId
const url_api_contrato = "/engine-rest/process-definition/key/ProcesoContratos/start/";
const url_api_contrato_ID = '/engine-rest/task?processDefinitionId=ProcesoContratos:25:288c6136-e2e8-11ea-8717-287fcfe23944';



@Injectable()
export class ServiceService {

  constructor(private http: HttpClient) { }
  mensaje: string;
  private enviarMensajeSubject = new Subject<string>();
  enviarMensajeObservable = this.enviarMensajeSubject.asObservable();

  enviarMensjae(mensaje: string) {
    this.mensaje = mensaje;
    this.enviarMensajeSubject.next(mensaje);
  }
  enviarIDObservable = this.enviarMensajeSubject.asObservable();
  enviarId(id: string) {
    this.mensaje = id;
    this.enviarMensajeSubject.next(id);
    return this.http.get(id, httpOption);
  }

  id_revisionLegal: string;
  private enviarMensajeSubject_revisionLegal = new Subject<string>();
  enviarMensajeObservable_revisionLegal = this.enviarMensajeSubject.asObservable();
  

  pasarIDdeContrato(id  : string): Observable<any>{
    
    let url = "/engine-rest/process-instance/2ea28dc8-dec5-11ea-9eb7-287fcfe23944/variables";
    let otro = "/engine-rest/process-instance/"+id.toString()+"/variables";


    let casa = otro.toString();
    console.log("Estas en pasarporId ", typeof(url))
    console.log("Estas en pasarporId ", typeof(otro))
    return this.http.get(casa,httpOption);

  }
  obtenerCantidadRevinicial(): Observable<any> {
    return this.http.get(url_api_contrato_ID, httpOption);
  }
  getInfoContrato(): Observable<any> {
    return this.http.get(url_api_contrato_ID, httpOption);
  }
  crearProcesoGeneraContrato(variables2
    // :
    // {
    //   variables:
    //   {
    //     empresa: { value: string; type: string; };
    //     nombre_solicitante: { value: string; type: string; };
    //     area_solicitante: { value: string; type: string; };
    //     nombre_responsable_area: { value: string; type: string; };
    //     nombre_apoderado_legal: { value: string; type: string; };
    //     nombre_contraparte_juridica: { value: string; type: string; };
    //     rfc_contraparte: { value: string; type: string; };
    //     domicilio_contraparte: { value: string; type: string; };
    //     antecedentes: { value: string; type: string; };
    //     tipo_instrumento: { value: string; type: string; };
    //     vigencia: { value: string; type: string; };
    //     objeto: { value: string; type: string; };
    //     contraprestacion: { value: string; type: string; };
    //     aprobacion: { value: false; type: Boolean; };
    //   };
    // }
    ): Observable<any> {
    console.log(variables2);
    return this.http.post(url_api_contrato, variables2, httpOption);
  }

  enviarARevisionLegal(variables, id : string): Observable<any> {
    let otro = "/engine-rest/task/"+id.toString()+"/complete";
    return this.http.post(otro, variables, httpOption);
  }


  // ------------------ Esto lo vamos a ocupar para mostrar revisiónes de ocntrato ----------------
  id_Revision : string;
  executionId_Revision : string; 
  private revisionMensajeSubjet_ID = new Subject<string>();
  private revisionMensajeSubjet_EXCUTION = new Subject<string>();
  revisionObservable_ID = this.revisionMensajeSubjet_ID.asObservable();
  revisionObservable_EXCUTION = this.revisionMensajeSubjet_EXCUTION.asObservable();

  enviarRevision(id_Revision : string, executionId_Revision :string){
    this.id_Revision = id_Revision;
    this.executionId_Revision = executionId_Revision;

    this.revisionMensajeSubjet_ID.next(id_Revision);
    this.revisionMensajeSubjet_EXCUTION.next(executionId_Revision);
    
  }

}