import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { IUser } from 'src/model/interfaces';
import { Subscription } from 'rxjs';
import { LoaderService } from 'src/app/services/loader/loader.service';

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
    public loading: LoaderService) { }

  ngOnInit() {

   // this.loading.present();
    this.userSupscription = this.userService.getUserData().subscribe((user: IUser)=> {
      this.user = user[0];
      console.log("user", this.user.gender, this.user);
      this.displayBrideOrGroom();
   //   this.loading.dismiss();
    });
  }

  displayBrideOrGroom(){
    this.isBride = (this.user.gender === "Female") ? "bride" : "groom";
  }

  ngOnDestroy(){
    this.userSupscription.unsubscribe();
  }

}
