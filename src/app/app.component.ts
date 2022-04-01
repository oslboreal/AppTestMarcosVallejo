import { Component } from '@angular/core';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /* Fields for sum */
  public firstValue: number = 0;
  public secondValue: number = 0;
  public thirdValue: number = 0;
  public average: number = 0;
  public userService: UserService;

  /* Fields for user. */
  public userEmail: string;
  public userPassword: string;
  public localStorageUser: string;
  public localStoragePassword: string;

  constructor(userService: UserService) {
    this.userService = userService;

    this.userEmail = '';
    this.userPassword = '';
    this.localStorageUser = '';
    this.localStoragePassword = '';
  }

  sum() {
    this.thirdValue = +this.firstValue + +this.secondValue;
    this.average = this.thirdValue / 2;
  }

  createUser() {
    this.userService.createUser(this.userEmail, this.userPassword);
  }

  getUser(){
    let currentUser = this.userService.getUser();
    this.localStoragePassword = currentUser.password;
    this.localStorageUser = currentUser.email;
  }
}
