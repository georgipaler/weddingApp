import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from 'src/model/interfaces';
import { BehaviorSubject, Observable } from 'rxjs';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: IUser;

  constructor(
    private http: HttpClient,
    private nativeStorage: NativeStorage
    ) { }

  getUserData(): Observable<Object>  {
    return this.http.get('https://guarded-citadel-95311.herokuapp.com/users');
  }

  setUser( user: IUser) {
    this.user = user;
    this.nativeStorage.setItem('userProfile', this.user)
    .then(
      () => console.log('Stored user!'),
      error => console.error('Error storing item', error)
    );
  }

  getUser() {
    this.nativeStorage.getItem('userProfile').then(res =>
      this.user = res );
    return this.user;
  }
}
