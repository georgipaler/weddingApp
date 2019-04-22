import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  public formLogin : FormGroup;

  constructor(private authService : AuthService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initLoginForm();
  }

  onLogin(){
    console.log("values form", this.formLogin.value);
    this.authService.login();
    this.router.navigate(['welcome/tabs/home']);
  }

  connectFacebook(){
    //connect with Facebook
    this.onLogin();
  }

  connectGoogle(){
    //connect with google
    this.onLogin();
  }

  segmentChanged(event){
    console.log(event);
  }

  initLoginForm() {
    this.formLogin = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: [''],
      password: ['']
    });
  }

}
