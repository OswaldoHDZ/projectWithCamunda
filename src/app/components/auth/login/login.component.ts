import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service'
import { UserI } from '../../../shared/models/user.interface'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
    const user : UserI = {
      email : 'oswaldo@gmail.com',
      password : '123456'
    } ;
    // this.authSvc.loginByEmail(user)
  }

}
