import { Injectable } from '@angular/core';
import { UserI } from '../models/user.interface';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

const url_api_count = "/authorization/count/";

const url_api = "/engine-rest/process-definition/key/payment-retrieval/start/"

const httpOption ={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}


@Injectable()
export class AuthService {



  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({ "Content-Type": "application/json" });


  loginuser(user: string, password: string): Observable<any> {

    return this.http
      .post<UserI>(
        url_api_count,
        { user, password },
        { headers: this.headers }
      )
      .pipe(map(data => data));
  }

	login2(user : UserI): Observable<any>{
		console.log(user);
		return this.http.post(url_api_count,user,httpOption);
	}
	// getAllbooks(variabe: { variables: { amount: { value: number; type: string; }; item: { value: string; }; }; }): Observable<any>{
	// 	console.log(variabe);
	// 	return this.http.post(url_api,variabe,httpOption);
	// }

}
