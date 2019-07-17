import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { IUser } from 'src/model/interfaces';
import { Subscription } from 'rxjs';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { ActionSheetController, PopoverController, ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { PopoverComponent } from 'src/app/components/popover/popover.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit, OnDestroy {
  user: IUser;
  isBride: string;

  private userSupscription: Subscription;

  constructor(
    private userService: UserService,
    public loading: LoaderService,
    public actionSheetCtrl: ActionSheetController,
    private authService: AuthService,
    private router: Router,
    public popoverController: PopoverController,
    private modalController: ModalController
  ) {}

  ngOnInit() {

    this.loading.present();
    this.userSupscription = this.userService.getUserData().subscribe(
      (user: IUser[]) => {
        if ( this.userService.getUser() ) {
          this.user = user.filter( us => us.name === this.userService.getUser().name)[0];
        } else {
          this.user = user[0];
        }
        console.log('user', this.user.gender, this.user);
        this.displayBrideOrGroom();
        this.loading.dismiss();
      },
      err => {
        console.log(err);
      }
    );
  }

  displayBrideOrGroom() {
    this.isBride = this.user.gender === 'Female' ? 'bride' : 'groom';
  }

  public splitName(fullName: string) {
    return fullName ? fullName.split(' ').map(value => value[0]).join('').substring(0, 2).toLocaleUpperCase() : '';
  }

  ngOnDestroy() {
    this.userSupscription.unsubscribe();
  }

  goToNotes(path: string) {
    this.router.navigateByUrl('welcome/tabs/home/' + path);
  }

  goToVendors(path: string) {
    this.router.navigateByUrl('welcome/tabs/home/' + path);
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Settings',
      buttons: [
        {
          text: 'View profile',
          handler: () => {
            console.log('edit clicked');
            this.goToUserDetails(this.user);
          }
        },
        {
          text: 'Log out',
          handler: () => {
            console.log('log out clicked');
            this.authService.logout();
            this.router.navigateByUrl('/auth');
          }
        },
        {
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

  async goToUserDetails(user: IUser) {
    const modal: HTMLIonModalElement = await this.modalController.create({
      component: ViewProfileComponent,
      componentProps: { user: user }
    });

    modal.onDidDismiss().then(data => {
    });
    modal.present();
  }

  async presentPopover() {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      translucent: true
    });
    return await popover.present();
  }
}
