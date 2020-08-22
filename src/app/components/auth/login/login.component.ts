import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service'
import { UserI } from '../../../shared/models/user.interface'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }
  public userNanme : string;
  public pass : string;
  private user : UserI = {
    user : '',
    password : ''
  } ;

  ngOnInit()  {}
  onLogin(){
    return this.authService.loginuser(this.user.user, this.user.password).subscribe(
      data => {
    });
  }




  public exito: string;
  public amount : number;
  public item : string;
  public variables = {
    "variables": {
      "amount": {
        "value":123456789,
        "type":"long"
      },
      "item": {
        "value": "Prueba"
      }
    }
  }

  
  mandaInformacion (){
    this.variables.variables.amount.value =1234567;
    this.variables.variables.item.value = 'qwertyuio'; 
    // this.authService.getAllbooks(this.variables).subscribe(
    //   data =>{
    //     console.log(data)
    //   },
    //   err =>{
    //     console.log(err.error.message);
        
    //         }
    // );
    
  }
}
