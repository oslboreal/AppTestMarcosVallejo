import { Injectable } from '@angular/core';
import { User } from '../Entities/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  createUser(email: string, password: string) {
    console.log('Create user');
    let user = new User(email, password);
    sessionStorage.setItem('userEmail', user.email);
    sessionStorage.setItem('userPassword', user.password);
  }

  getUser() : User{
    console.log('Get users');
    let email = sessionStorage.getItem('userEmail');
    let password = sessionStorage.getItem('userPassword');
    return new User(email ?? '-', password ?? '-');
  }
}
