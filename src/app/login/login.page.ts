import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';

interface User {
  email?: string;
  password?: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user:User = {
    email: 'diane@email.com',
    password: 'diane1'
  }
  activeUser: {}
  activeSection = ""
  constructor(
    public afAuth: AngularFireAuth,
    private router: Router
    ) { }

  ngOnInit() {

  }

  changeSection(section: string){
    this.activeSection = section
  }

  async login(){
    await this.afAuth.auth.setPersistence(auth.Auth.Persistence.LOCAL).then(() => {
      this.afAuth.auth.signInWithEmailAndPassword( this.user.email, this.user.password)
      .then( user => {
        this.router.navigate(['home']);
      })
    });
  }

  async createAccount() {
    await this.afAuth.auth.setPersistence(auth.Auth.Persistence.LOCAL).then(() => {
      this.afAuth.auth.createUserWithEmailAndPassword( this.user.email, this.user.password)
      .then( user => {
        this.router.navigate(['home']);
      })
    });
  }

}
