import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { IUser } from 'src/model/interfaces';
import { Subscription } from 'rxjs';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { ActionSheetController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user: IUser;
  isBride: string;

  private userSupscription: Subscription;

  constructor(private userService: UserService,
    public loading: LoaderService,
    public actionSheetCtrl: ActionSheetController, 
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {

    //this.loading.present();
    this.userSupscription = this.userService.getUserData().subscribe((user: IUser)=> {
      this.user = user[0];
      console.log("user", this.user.gender, this.user);
      this.displayBrideOrGroom();
     // this.loading.dismiss();
    }, err => {
      console.log(err);
    });
  }

  displayBrideOrGroom(){
    this.isBride = (this.user.gender === "Female") ? "bride" : "groom";
  }

  ngOnDestroy(){
    this.userSupscription.unsubscribe();
  }

  goToNotes(path: string){
    this.router.navigateByUrl('welcome/tabs/home/'+path);
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Settings',
      buttons: [
        {
          text: 'Edit profile',
          handler: () => {
            console.log('edit clicked');
          }
        },{
          text: 'Log out',
          handler: () => {
            console.log('log out clicked');
            this.authService.logout();
            this.router.navigateByUrl('/auth');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }

}
