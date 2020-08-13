
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable'


const httpOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

const url_api = "/engine-rest/process-definition/key/payment-retrieval/start/"

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }


  getAllbooks(variabe: { variables: { amount: { value: number; type: string; }; item: { value: string; }; }; }): Observable<any> {
    console.log(variabe);
    return this.http.post(url_api, variabe, httpOption);
  }

}
