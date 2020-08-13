import { Injectable } from '@angular/core';
import { UserI } from '../models/user.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userData : string ;

  //Aqui tenemos que obtener el usuario
  // constructor(private afAuth: AngularFireAuth) { 
  //   this.userData = afAuth.authState;
  // }
  // loginByEmail(user: UserI) {
  //   const { email, password } = user;
  //   this.afAuth.auth.signInWithEmailAndPassword(email, password).then(res => {
  //     console.log("Todo bien", res)
  //   })
  //     .catch(err => console.log('Error,', err))
  // }

  // logout() {
  //   this.afAuth.auth.signOut();
  // }
}
