import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

constructor() { }

 login() {
    window.localStorage.setItem('token', 'token');
  }

}
