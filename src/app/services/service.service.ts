
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable'


const httpOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

const url_api = "/engine-rest/process-definition/key/payment-retrieval/start/"
const url_api_contrato = "/engine-rest/process-definition/key/ProcesoContratos/start/"


@Injectable()
export class ServiceService {

  constructor(private http: HttpClient) { }
  public empresa: string;
  public area_solicitante: string;

  getAllbooks(variabe: { variables: { amount: { value: number; type: string; }; item: { value: string; }; }; }): Observable<any> {
    console.log(variabe);
    return this.http.post(url_api, variabe, httpOption);
  }

  crearProcesoGeneraContrato(variables2: { variables: { empresa: { value: string; type: string; }; area_solicitante: { value: string; type: string; }; }; }) {
    console.log(variables2);
    return this.http.post(url_api_contrato, variables2, httpOption);
  }

}
