import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { IonSlides, ModalController } from '@ionic/angular';
import { HelpModalComponent } from 'src/app/components/modals/help-modal/help-modal/help-modal.component';
import { IUser } from '../../../model/interfaces';
import { LoaderService } from '../../services/loader/loader.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  @ViewChild('slider') slider: IonSlides;
  public formLogin: FormGroup;
  formRegister: FormGroup;
  page: any = '0';

  constructor(private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    public modalController: ModalController,
    private loader: LoaderService
    ) { }

  ngOnInit() {
    this.initLoginForm();
    this.initRegisterForm();
  }

  onLogin() {
    console.log('values form', this.formLogin.value);
    this.authService.login();
    this.router.navigate(['welcome/tabs/home']);
  }

 onRegister() {
   const user: IUser = {
    name: this.formRegister.value.fullName,
    gender: this.formRegister.value.gender,
    email: this.formRegister.value.email
   };
   fetch('https://guarded-citadel-95311.herokuapp.com/users/register', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(response => {
    console.log('Success:', JSON.stringify(response));
    this.loader.present();
    this.router.navigateByUrl('/');
    this.loader.dismiss();
  })
  .catch(error => console.error('Error:', error));

 }

  async openHelpModal() {
    // open help modal
    const modal = await this.modalController.create({
      component: HelpModalComponent,
      cssClass: 'help-modal-component'
    });
    return await modal.present();
  }

  // change slide on click SignIn/SignUp button
  segmentChanged(event) {
    this.slider.slideTo(event.detail.value);
  }


  // change selected button Sign In/ Sign Up
  changeButton(event) {
    this.slider.getActiveIndex().then(index => this.page = index.toString());
  }

  initLoginForm() {
    this.formLogin = this.formBuilder.group({
      email: new FormControl('', {
        validators: Validators.compose([Validators.required]),
        updateOn: 'change'
    }),
      password: new FormControl('', {
        validators: Validators.compose([Validators.required]),
        updateOn: 'change'
    })
    });
  }

  initRegisterForm() {
    this.formRegister = this.formBuilder.group({
      fullName: new FormControl('', {
        validators: Validators.compose([Validators.required]),
        updateOn: 'change'
    }),
      gender: new FormControl('', {
        validators: Validators.compose([Validators.required]),
        updateOn: 'change'
    }),
      email: new FormControl('', {
        validators: Validators.compose([Validators.required]),
        updateOn: 'change'
    }),
      password: new FormControl('', {
        validators: Validators.compose([Validators.required]),
        updateOn: 'change'
    }),
    });
  }

}
