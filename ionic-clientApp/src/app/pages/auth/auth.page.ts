import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  @ViewChild('slider') slider: IonSlides;
  public formLogin : FormGroup;
  page: string ="0";

  constructor(private authService : AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    ) { }

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

  //change slide on click SignIn/SignUp button
  segmentChanged(event){
    this.slider.slideTo(event.detail.value);
  }


  //change selected button Sing In/ Sign Up
  changeButton(event){
    this.slider.getActiveIndex().then(index=> this.page=index.toString());
  }

  initLoginForm() {
    this.formLogin = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: [''],
      password: ['']
    });
  }

}
